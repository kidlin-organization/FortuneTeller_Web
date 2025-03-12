import React, { useRef, useEffect, useState } from "react";

const ReversibleVideo = ({ selectedCharacter, src, ...props }) => {
  const videoRef = useRef(null);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrameId;

    // Videoyu ters oynat
    const playReverse = () => {
      setIsReversing(true);

      const reverseFrame = () => {
        if (videoElement.currentTime > 0) {
          videoElement.currentTime -= 0.033; // Her frame başına yaklaşık 30fps
          animationFrameId = requestAnimationFrame(reverseFrame);
        } else {
          // Eğer video sıfırıncı saniyeye geldiyse, tekrar ileri oynat
          setIsReversing(false);
          playForward();
        }
      };
      animationFrameId = requestAnimationFrame(reverseFrame);
    };

    // Videoyu ileri oynat
    const playForward = () => {
      setIsReversing(false);
      videoElement.play();
    };

    // Video bittiğinde ters oynatmayı başlat
    const handleVideoEnd = () => {
      if (!isReversing) {
        videoElement.pause();
        playReverse();
      }
    };

    // Video elementine olay dinleyicisi ekle
    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      // Olay dinleyicisini kaldır ve animasyonu iptal et
      videoElement.removeEventListener("ended", handleVideoEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReversing]);

  return (
    <video
      ref={videoRef}
      key={selectedCharacter}
      autoPlay
      loop={false} // Manuel döngü yapıyoruz
      muted
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ReversibleVideo;
