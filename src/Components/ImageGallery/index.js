import React, { useState } from "react";

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState({
    id: 1,
    image: "https://source.unsplash.com/random/900x700/?lucknow/1",
  });

  const images = [
    { id: 1, image: "https://source.unsplash.com/random/900x700/?lucknow/1" },
    { id: 2, image: "https://source.unsplash.com/random/900x700/?lucknow/2" },
    { id: 3, image: "https://source.unsplash.com/random/900x700/?lucknow/3" },
    { id: 4, image: "https://source.unsplash.com/random/900x700/?lucknow/4" },
    { id: 5, image: "https://source.unsplash.com/random/900x700/?lucknow/5" },
    { id: 6, image: "https://source.unsplash.com/random/900x700/?lucknow/6" },
    { id: 7, image: "https://source.unsplash.com/random/900x700/?lucknow/7" },
    { id: 8, image: "https://source.unsplash.com/random/900x700/?lucknow/8" },
    { id: 9, image: "https://source.unsplash.com/random/900x700/?lucknow/9" },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-screen justify-center items-center">
      <img src={currentImage.image} alt="" className="h-60" />
      <div className="flex gap-3">
        {images.map((i) => (
          <img
            src={i.image}
            alt=""
            onClick={() => setCurrentImage(i)}
            className="h-20 border border-black rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
