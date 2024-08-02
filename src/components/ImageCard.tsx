import React from "react";

interface ImageCardProps {
  url: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ url }) => {
  return (
    <div className="mr-4 ">
      <img
        src={url}
        alt="placeholder"
        className="w-[300px] h-[300px] object-cover rounded-lg"
      />
    </div>
  );
};

export default React.memo(ImageCard);
