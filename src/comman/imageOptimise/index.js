import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  webpSrc,
  avifSrc,
  placeholder,
  sizes = "100vw",
  srcSet = [],
  preload = false,
  className = "",
  style = {},
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Preloading Critical Image */}
      {preload && (
        <link
          rel="preload"
          as="image"
          href={src}
          imagesrcset={srcSet.join(', ')}
          imagesizes={sizes}
        />
      )}

      {/* Image with srcSet, AVIF/WebP fallback, and Lazy Loading */}
      <picture>
        {/* Modern format: AVIF */}
        {avifSrc && <source srcSet={avifSrc} type="image/avif" sizes={sizes} />}
        {/* Modern format: WebP */}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
        {/* Responsive formats via srcSet */}
        {srcSet.length > 0 && (
          <source srcSet={srcSet.join(', ')} sizes={sizes} />
        )}
        {/* Fallback with Lazy Load */}
        <LazyLoadImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          effect="blur"
          placeholderSrc={placeholder}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={style}
          onClick={onClick}
        />
      </picture>
    </>
  );
};

export default OptimizedImage;
