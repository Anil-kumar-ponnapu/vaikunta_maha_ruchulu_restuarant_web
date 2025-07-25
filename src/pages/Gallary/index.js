import React, { useState, useEffect } from "react";
import "./gallery.css";
import Maincard from "../../comman/maincard";
import OptimizedImage from "../../comman/imageOptimise";


const mediaItems = [
  { id: 1, type: "image", src: "assets/gallery/_VKR7599.JPG", alt: "Image 1" },
  { id: 2, type: "image", src: "assets/gallery/_VKR7611.JPG", alt: "Image 2" },
  { id: 3, type: "image", src: "assets/gallery/_VKR7618.JPG", alt: "Image 3" },
  { id: 4, type: "image", src: "assets/gallery/_VKR7613.JPG", alt: "Image 4" },
  { id: 5, type: "image", src: "assets/gallery/_VKR7617.JPG", alt: "Image 5" },
  { id: 6, type: "image", src: "assets/gallery/_VKR7814.JPG", alt: "Image 6" },
  { id: 7, type: "image", src: "assets/gallery/_VKR7959.JPG", alt: "Image 7" },


];

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>


      <div className="gallery-section">
        <Maincard image={"assets/gallery_image.svg"} title={"GALLERY"} />



        <img src="assets\images\informationCard.jpg" className="gallery-image" loading="lazy" />


        <div className="gallery-wrapper">
          <h1 className="gallery-heading">GALLERY</h1>
          <p className="gallery-paragraph">
            Step into the visual world of <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu Restaurant</spam>, proudly opened on <spam style={{ fontWeight: '700' }}>2nd JULY- 2025</spam> in the heart of Vizag. As a pure veg restaurant, we bring you the true essence of Andhra vegetarian cuisine, captured beautifully in our vibrant gallery.<br />

            From the grand opening ceremony moments to the delicious spreads of our signature thalis, every image reflects our commitment to quality, tradition, and taste. Whether you're a local foodie or a visitor searching for the best vegetarian food in Visakhapatnam, our gallery gives you a taste of the Vaikunta experience.<br />

            🌿 100% Pure Veg | Hygienic & Homely Atmosphere | South Indian Delights
          </p>

          {/* 👇 Highlighted image floating over grid */}
          {selectedImage && (
            <div className="overlay-image-container" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage.src} alt={selectedImage.alt} className="overlay-image" loading="lazy"
              />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>

              </button>
            </div>
          )}

          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems.map((item) => (
              <OptimizedImage
                key={item.id}
                src={item.src}
                webpSrc={item.webpSrc}
                avifSrc={item.avifSrc}
                placeholder={item.placeholder}
                alt={item.alt}
                width="100%"
                height="auto"
                className="rounded-lg shadow-md cursor-pointer"
                srcSet={[
                  `${item.src}-480w.jpg 480w`,
                  `${item.src}-768w.jpg 768w`,
                  `${item.src}-1024w.jpg 1024w`,
                ]}
                sizes="(max-width: 768px) 100vw, 33vw"
                preload={false} 
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
