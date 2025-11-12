import { FaUsers, FaAward, FaChartLine, FaArrowRight, FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
          {/* Fallback gradient if video fails to load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Minimal Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Transform your brand with cutting-edge marketing strategies
          </p>
          <button className="bg-white/10 backdrop-blur-md text-white px-12 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;