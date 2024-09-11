import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      id: 1,
      content:
        "Gerçekten usta bir uygulama. Yaşadığım her şeye dair çok eğlenceli okuması zevkli hikayeler anlatıyor, çok teşekkür ederim. Siz bana teselli oluyorsunuz. Tekrardan söylüyorum kesinlikle indirin.",
      author: "Sevinç K.",
    },
    {
      id: 2,
      content: "Çok eğlenceli, teşekkürler Faladdin!",
      author: "İrem Ş.",
    },
    {
      id: 3,
      content: "Muhteşem... Sanki içimi okuyor, iyi hissettiriyor.",
      author: "Songul S.",
    },
    {
      id: 4,
      content:
        "Çok güzel hikayeler. Bazen kendimi içinde bir kahraman gibi görüyorum.",
      author: "İlknur K.",
    },
    {
      id: 5,
      content: "Harika bir deneyim, sürekli kullanıyorum!",
      author: "Selin Y.",
    },
  ];

  const visibleSlides = 4; // Aynı anda görünecek yorum kartı sayısı

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? comments.length - visibleSlides
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === comments.length - visibleSlides;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-4 bg-zinc-800 rounded-lg border border-zinc-800">
      {/* Carousel */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {comments.map((comment) => (
            <div key={comment.id} className="w-1/4 p-4 flex-shrink-0">
              <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg h-full relative">
                <blockquote className="italic mb-8">
                  “{comment.content}”
                </blockquote>
                {/* Kullanıcı ismi sol alt köşede */}
                <p className="absolute bottom-4 left-4 text-sm font-semibold">
                  {comment.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-zinc-700 rounded-full text-white hover:bg-zinc-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-zinc-700 rounded-full text-white hover:bg-zinc-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
