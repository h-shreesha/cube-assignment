import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";
import useFetchData from "./hooks/useFetchData";
const Sidebar = lazy(() => import("./components/Sidebar"));
const Content = lazy(() => import("./components/Content"));

const App: React.FC = () => {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const imageUrl = "https://jsonplaceholder.typicode.com/photos";

  const { data: posts, loading: postsLoading } = useFetchData(postUrl);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  if (postsLoading) {
    return <div>Loading...</div>;
  }

  const selectedPost =
    posts.find((post) => post.id === selectedPostId) || posts[0];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 h-full">
        <Suspense fallback={<p>Fallback Loading...</p>}>
          <Sidebar
            posts={posts}
            selectedPostId={selectedPost.id}
            setSelectedPostId={setSelectedPostId}
          />
          <Content post={selectedPost} imageUrl={imageUrl} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
