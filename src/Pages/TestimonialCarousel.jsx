import { useState, useEffect, useRef } from "react";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef(null);
  const waveContainerRef = useRef(null);

  const testimonials = [
    {
      quote: "Yum! Added to my cocktails and a squeeze of lemon - voila MAGIC!! What a colour! Thanks Blue Tea. You made my day.",
      author: "Ananya",
      color: "bg-yellow-300"
    },
    {
      quote: "Blue Tea gives just the perfect break from my daily chores. Something to look forward to every day. 😍",
      author: "Anuradha",
      color: "bg-pink-300"
    },
    {
      quote: "Blue Tea has become my favorite daily ritual. It gives me a peaceful break from everything and makes me feel refreshed, calm, and a little more centered. ",
      author: "Deepshikha Modi",
      color: "bg-purple-400"
    },
    {
      quote: "LITERALLY THE BEST OAT MILK I'VE TASTED IN INDIA. IT GOES EXTREMELY WELL WITH MY COFFEE IN THE MORNINGS. GREAT JOB, ALTCO!",
      author: "Vikas Mehta",
      color: "bg-blue-300"
    },
    {
      quote: "Blue Tea adds a bit of magic to my routine. It’s more than tea—it’s a little pause button that helps me relax and recharge daily.",
      author: "Priya Sharma",
      color: "bg-yellow-300"
    },
    {
      quote: "Every evening, I wind down with Blue Tea. It’s soothing, beautiful, and tastes amazing—like a quiet moment of joy I genuinely look forward to.",
      author: "Arjun Kapoor",
      color: "bg-pink-300"
    },
    {
      quote: "Blue Tea offers the perfect break. Just a few sips, and I feel lighter, more relaxed, and ready to take on whatever comes next.",
      author: "Neha Gupta",
      color: "bg-purple-400"
    },
    {
      quote: "There’s something so comforting about Blue Tea. It’s the calm in my chaos, and now it’s the part of my day I truly cherish the most.",
      author: "Suresh Patel",
      color: "bg-blue-300"
    }
  ];

  // Handle responsive display
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up wave animation
  useEffect(() => {
    const container = waveContainerRef.current;
    if (container) {
      // Create a duplicate of the SVG
      const originalSVG = container.querySelector('.img-svg');
      const cloneSVG = originalSVG.cloneNode(true);
      cloneSVG.classList.add('img-svg-clone');
      container.appendChild(cloneSVG);
    }
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index > maxIndex ? maxIndex : index);
  };

  const slideWidth = 100 / itemsPerView;

  return (
    <div className="w-full relative mx-auto px-16 py-32 bg-yellow-50">
      <h1 className="text-4xl font-bold text-center text-purple-900 mb-12">
        HAPPY CUSTOMERS.
      </h1>

      <div className="relative" ref={containerRef}>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ width: `${slideWidth}%` }}
                className="flex-shrink-0 px-2"
              >
                <div className={`${testimonial.color} rounded-lg p-6 h-64 flex flex-col justify-between`}>
                  <p className="text-sm font-bold leading-tight">{`"${testimonial.quote}"`}</p>
                  <p className="text-sm font-medium mt-2">-{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2 mb-24">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-yellow-500" : "bg-yellow-200"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div ref={waveContainerRef} className="wave-wrapper absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "268px" }}>
        <img
          className="img-svg absolute bottom-0 left-0 w-full z-10"
          src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%238EC5FF'/%3e%3c/svg%3e"
          alt="Wave SVG"
        />
      </div>

      <style jsx>{`
        @keyframes moveWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .img-svg {
          animation: moveWave 20s linear infinite;
        }
        
        .img-svg-clone {
          animation: moveWave 20s linear infinite;
          left: 100%;
        }
      `}</style>
    </div>
  );
}