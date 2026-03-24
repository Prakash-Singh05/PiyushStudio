import React, { useRef } from "react";

// ✅ Data should be defined properly
const items = [
  { type: "image", src: "https://i.pinimg.com/736x/6d/04/1d/6d041d92a682b97ed37b27e071f2ab78.jpg" },
  { type: "image", src: "https://i.pinimg.com/avif/1200x/0b/81/aa/0b81aa714d811fc634bf13f92acabcb3.avf" },
  { type: "image", src: "https://i.pinimg.com/736x/d0/3b/99/d03b99c26428a643b1c6ec637f6f81fd.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/50/c5/4f/50c54f14a86adc4e8c7c44186f157a9f.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/8f/23/dc/8f23dc0c60492a1215b1e4bc94916314.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/97/b8/18/97b818d48652983e63120301dea0ef64.jpg" },
  { type: "image", src: "https://i.pinimg.com/1200x/e3/5e/62/e35e62d11df632b0d62706394b38f966.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/df/bf/83/dfbf83c8f55f141ed20d8d276a658b8e.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/64/11/fd/6411fd2f2be781fde80fa0dd23578525.jpg" },
  { type: "image", src: "https://i.pinimg.com/736x/33/f9/c5/33f9c5de01f7d89f130d9717a00a9ec6.jpg" },
  { type: "video", src: "https://www.pexels.com/download/video/8776998/" },
  { type: "video", src: "https://www.pexels.com/download/video/16352543/" },
  { type: "video", src: "https://www.pexels.com/download/video/29766213/" }
];

const GalleryItem = ({ item }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="card">
      {item.type === "image" ? (
        <img src={item.src} alt="gallery" loading="lazy" />
      ) : (
        <div className="videoWrapper">
          <video
            ref={videoRef}
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
    </div>
  );
};

// ✅ Single clean component
const Gallery = () => {
  return (
    <div className="container">
      <h2 className="title">Our Gallery</h2>

      <div className="masonry">
        {items.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;