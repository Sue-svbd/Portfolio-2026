import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { src, alt, style, className, loading, srcSet, sizes, ...rest } = props;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={style}
    >
      {/* Loading Skeleton */}
      {isLoading && !didError && (
        <div className="absolute inset-0 z-10 animate-pulse bg-transparent flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#614DD5]/30 border-t-[#614DD5] rounded-full animate-spin" />
        </div>
      )}

      {didError ? (
        <div className="flex items-center justify-center w-full h-full min-h-[100px] bg-transparent">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            className="w-12 h-12 opacity-30"
            {...rest}
            data-original-url={src}
          />
        </div>
      ) : (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full transition-opacity duration-700 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${className?.split(" ").find((c) => c.startsWith("object-")) || "object-cover"}`}
          {...rest}
          loading={loading || "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
}
