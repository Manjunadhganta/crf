import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
      "/pre-property-registration.webp",
      "/legal-documentation.webp",
      "/registration-processing.webp",
      "/post-registration-services.webp",
      "/approvals-permissions.webp",
      "/personal-legal-support.webp",
      "/organization-registrations.webp",
      "/loan-facilitation.webp",
      "/nri-exclusive.webp",
];

export default function ImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const stopAutoSlide = () => clearInterval(slideInterval.current);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full max-w-2xl overflow-hidden relative"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full flex-shrink-0 rounded-lg"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-3 rounded-full shadow hover:bg-white transition"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-3 rounded-full shadow hover:bg-white transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex items-center mt-4 space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === i ? "bg-black" : "bg-black/30 hover:bg-black/60"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
