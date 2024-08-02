import React, { useState, useEffect, useCallback } from "react";
import "../App.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface SidebarProps {
  posts: Post[];
  selectedPostId: number;
  setSelectedPostId: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  posts,
  selectedPostId,
  setSelectedPostId,
}) => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setVisiblePosts(posts.slice(0, 20));
  }, [posts]);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

      if (scrollHeight - scrollTop === clientHeight && hasMore) {
        const currentLength = visiblePosts.length;
        const morePosts = posts.slice(currentLength, currentLength + 20);

        if (morePosts.length > 0) {
          setVisiblePosts((prevPosts) => [...prevPosts, ...morePosts]);
        } else {
          setHasMore(false);
        }
      }
    },
    [hasMore, posts, visiblePosts.length]
  );

  const handleClick = useCallback(
    (id: number) => {
      setSelectedPostId(id);
    },
    [setSelectedPostId]
  );

  return (
    <div
      className="w-1/4 bg-white p-4 shadow-md h-screen
       overflow-y-auto"
      onScroll={handleScroll}
    >
      <h2 className="text-xl mb-4 text-center">Details</h2>
      <ul>
        {visiblePosts.map((post) => (
          <li
            key={post.id}
            className={`cursor-pointer p-2 mb-1  border-b  ${
              selectedPostId === post.id ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick(post.id)}
          >
            <h1 className="text-xl mb-2 font-semibold line-clamp title">
              {post.title}
            </h1>
            <p className="line-clamp paragraph">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
