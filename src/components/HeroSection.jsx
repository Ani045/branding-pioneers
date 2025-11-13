import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient background - always visible as base */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Video overlay (if available) */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 cursor-pointer"
            onError={() => setVideoError(true)}
            onClick={togglePlayPause}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Video Controls */}
      {!videoError && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          <button
            onClick={togglePlayPause}
            className="bg-amber-800/80 backdrop-blur-md text-white p-3 rounded-full hover:bg-amber-700 transition-all duration-300 border border-amber-600/50"
          >
            {isPlaying ? <FaPause className="text-lg" /> : <FaPlay className="text-lg ml-1" />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-amber-800/80 backdrop-blur-md text-white p-3 rounded-full hover:bg-amber-700 transition-all duration-300 border border-amber-600/50"
          >
            {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
          </button>
        </div>
      )}

      {/* Minimal Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Transform your brand with cutting-edge marketing strategies
          </p>
          <button className="bg-amber-800/20 backdrop-blur-md text-white px-12 py-4 rounded-full hover:bg-amber-700/30 transition-all duration-300 font-semibold text-lg border-2 border-amber-600/40">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;