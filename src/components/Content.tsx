import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import ImageCard from "./ImageCard";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface ContentProps {
  post: Post | null;
  imageUrl: string;
}

const Content: React.FC<ContentProps> = ({ post, imageUrl }) => {
  const { data: images, loading } = useFetchData(imageUrl);
  const [displayedImages, setDisplayedImages] = useState<any[]>([]);

  useEffect(() => {
    if (images.length > 0) {
      setDisplayedImages(images.slice(0, 6));
    }

    const interval = setInterval(() => {
      setDisplayedImages((prevImages) => {
        const nextIndex =
          (images.indexOf(prevImages[prevImages.length - 1]) + 1) %
          images.length;
        return images.slice(nextIndex, nextIndex + 6);
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  if (loading) {
    return <div className="w-3/4 bg-white p-4 shadow-md">Loading...</div>;
  }

  if (!post) {
    return <div className="w-3/4 bg-white p-4 shadow-md">No Post Selected</div>;
  }

  return (
    <div className="w-3/4 bg-white p-4 shadow-md h-screen text-center">
      <h2 className="text-2xl mb-2">{post.title}</h2>
      <p>{post.body}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {displayedImages.map((image) => (
          <ImageCard key={image.id} url={image.url} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Content);
