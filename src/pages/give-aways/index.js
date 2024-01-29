/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../../assets/images/give-aways/img1.png";
import img2 from "../../assets/images/give-aways/img2.png";
import img3 from "../../assets/images/give-aways/img3.png";
import img4 from "../../assets/images/give-aways/img3.png";
import NavigateHeader from "@/components/shared/Header/NavigateHeader";

const GiveAwaysPage = () => {
  const images = [
    { img: img1, width: 200, height: 100 },
    { img: img2, width: 800, height: 840 },
    { img: img3, width: 640, height: 300 },
    { img: img4, width: 200, height: 100 },
    { img: img1, width: 100, height: 240 },
    { img: img2, width: 240, height: 300 },
    { img: img3, width: 200, height: 100 },
    { img: img4, width: 400, height: 440 },
    { img: img1, width: 240, height: 300 },
    { img: img2, width: 200, height: 100 },
    { img: img3, width: 100, height: 240 },
    { img: img4, width: 240, height: 300 },
  ].map((image) => {
    return {
      src: image.img,
      width: image.width,
      height: image.height,
      href: "",
    };
  });
  return (
    <div className="max-w-theme px-[14px] mx-auto">
      <NavigateHeader />
      <PhotoAlbum
        photos={images}
        layout="rows"
        targetRowHeight={150}
        // onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <Image
            src={photo.src}
            style={wrapperStyle}
            className="object-cover"
            target="_blank"
            rel="noreferrer noopener"
          />
        )}
      />
    </div>
  );
};

export default GiveAwaysPage;
