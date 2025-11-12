import { useState, useEffect } from 'react';
import { 
  FaChevronDown, FaBullseye, FaChartLine, FaSearch, FaShare, FaEnvelope, 
  FaChartBar, FaBullhorn, FaPencilAlt, FaMobile, FaShoppingCart, FaGlobe, 
  FaBars, FaTimes, FaPalette, FaCode, FaBolt, FaUsers, FaAward, 
  FaBriefcase, FaVideo, FaCamera, FaDesktop, FaMicrochip, 
  FaDatabase, FaCloud
} from 'react-icons/fa';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      icon: <FaPalette style={{fontSize: '48px'}} />,
      title: "Design & Branding",
      description: "Create memorable visual identities",
      color: "#D4A574",
      services: [
        { icon: <FaBullseye style={{fontSize: '16px'}} />, name: "Brand Strategy" },
        { icon: <FaPalette style={{fontSize: '16px'}} />, name: "Logo Design" },
        { icon: <FaPencilAlt style={{fontSize: '16px'}} />, name: "UI/UX Design" },
        { icon: <FaDesktop style={{fontSize: '16px'}} />, name: "Web Design" },
        { icon: <FaMobile style={{fontSize: '16px'}} />, name: "Mobile App Design" }
      ]
    },
    {
      icon: <FaCode style={{fontSize: '48px'}} />,
      title: "Development",
      description: "Build powerful digital solutions",
      color: "#B8956A",
      services: [
        { icon: <FaGlobe style={{fontSize: '16px'}} />, name: "Web Development" },
        { icon: <FaMobile style={{fontSize: '16px'}} />, name: "Mobile Apps" },
        { icon: <FaShoppingCart style={{fontSize: '16px'}} />, name: "E-commerce" },
        { icon: <FaDatabase style={{fontSize: '16px'}} />, name: "CMS Development" },
        { icon: <FaCloud style={{fontSize: '16px'}} />, name: "Cloud Solutions" }
      ]
    },
    {
      icon: <FaChartLine style={{fontSize: '48px'}} />,
      title: "Digital Marketing",
      description: "Grow your online presence",
      color: "#9C7F5C",
      services: [
        { icon: <FaSearch style={{fontSize: '16px'}} />, name: "SEO Optimization" },
        { icon: <FaBullhorn style={{fontSize: '16px'}} />, name: "Google Ads & PPC" },
        { icon: <FaShare style={{fontSize: '16px'}} />, name: "Social Media Marketing" },
        { icon: <FaEnvelope style={{fontSize: '16px'}} />, name: "Email Marketing" },
        { icon: <FaChartBar style={{fontSize: '16px'}} />, name: "Analytics & Insights" },
        { icon: <FaBolt style={{fontSize: '16px'}} />, name: "Marketing Automation" },
        { icon: <FaBullseye style={{fontSize: '16px'}} />, name: "Conversion Rate Optimization" },
        { icon: <FaGlobe style={{fontSize: '16px'}} />, name: "Local SEO" },
        { icon: <FaUsers style={{fontSize: '16px'}} />, name: "Influencer Marketing" },
        { icon: <FaVideo style={{fontSize: '16px'}} />, name: "Video Marketing" }
      ]
    },
    {
      icon: <FaVideo style={{fontSize: '48px'}} />,
      title: "Content & Media",
      description: "Engage with compelling content",
      color: "#8B7355",
      services: [
        { icon: <FaPencilAlt style={{fontSize: '16px'}} />, name: "Content Writing" },
        { icon: <FaVideo style={{fontSize: '16px'}} />, name: "Video Production" },
        { icon: <FaCamera style={{fontSize: '16px'}} />, name: "Photography" },
        { icon: <FaPencilAlt style={{fontSize: '16px'}} />, name: "Copywriting" },
        { icon: <FaMicrochip style={{fontSize: '16px'}} />, name: "Animation & Motion" }
      ]
    }
  ];

  const caseStudies = [
    {
      icon: <FaShoppingCart style={{fontSize: '32px'}} />,
      title: "E-commerce Success",
      client: "Fashion Retailer",
      result: "300% Revenue Growth",
      color: "#D4A574"
    },
    {
      icon: <FaChartLine style={{fontSize: '32px'}} />,
      title: "Brand Transformation",
      client: "Tech Startup",
      result: "500% Brand Awareness",
      color: "#B8956A"
    },
    {
      icon: <FaUsers style={{fontSize: '32px'}} />,
      title: "Social Media Campaign",
      client: "Food & Beverage",
      result: "2M+ Engagements",
      color: "#9C7F5C"
    },
    {
      icon: <FaAward style={{fontSize: '32px'}} />,
      title: "Website Redesign",
      client: "Healthcare Provider",
      result: "85% User Satisfaction",
      color: "#8B7355"
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg transition-all ${
              isScrolled 
                ? 'bg-blue-600' 
                : 'bg-white/10 backdrop-blur-md'
            }`}>
              <FaBolt style={{fontSize: '20px', color: 'white'}} />
            </div>
            <h1 className={`text-xl font-bold transition-all ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              MarketingPro
            </h1>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className={`transition font-medium hover:text-blue-600 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Home
            </a>
            
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`transition font-medium flex items-center gap-1 hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Services
                <FaChevronDown style={{fontSize: '16px', transform: activeMenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}} />
              </button>

              {activeMenu === 'services' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[1000px] max-w-[90vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Services</h3>
                    <p className="text-sm text-gray-600">Comprehensive solutions to elevate your brand</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {serviceCategories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-white/80 rounded-xl p-5 hover:shadow-lg transition group border border-gray-100 hover:border-blue-200"
                      >
                        <div 
                          className="rounded-xl p-4 mb-4 transition group-hover:scale-110"
                          style={{ backgroundColor: category.color + '20' }}
                        >
                          <div style={{ color: category.color }}>
                            {category.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 text-base">{category.title}</h4>
                        <p className="text-xs text-gray-600 mb-4">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.map((service, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="flex items-center gap-2 text-xs text-gray-700 hover:text-blue-600 transition group/item"
                            >
                              <div className="text-gray-500 group-hover/item:scale-125 group-hover/item:text-blue-600 transition">
                                {service.icon}
                              </div>
                              <span>{service.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F5EFE7] px-8 py-5 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-[#5C4B37] mb-1">Need a custom solution?</p>
                      <p className="text-xs text-[#8B7355]">Let us discuss your unique requirements</p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition font-medium">
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('cases')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`transition font-medium flex items-center gap-1 hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Case Studies
                <FaChevronDown style={{fontSize: '16px', transform: activeMenu === 'cases' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}} />
              </button>

              {activeMenu === 'cases' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] max-w-[90vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Success Stories</h3>
                    <p className="text-sm text-gray-600">Real results from real clients</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 p-8">
                    {caseStudies.map((study, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-white/80 rounded-xl p-6 hover:shadow-lg transition group border border-gray-100 hover:border-blue-200"
                      >
                        <div 
                          className="rounded-xl p-4 mb-4 inline-block transition group-hover:scale-110"
                          style={{ backgroundColor: study.color + '20' }}
                        >
                          <div style={{ color: study.color }}>
                            {study.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{study.title}</h4>
                        <div className="flex items-center gap-2 mb-3">
                          <FaBriefcase style={{fontSize: '16px', color: '#8B7355'}} />
                          <span className="text-sm text-gray-600">{study.client}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                          <FaChartLine style={{fontSize: '16px', color: '#10B981'}} />
                          <span className="text-sm font-semibold text-green-700">{study.result}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-5 text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition font-medium">
                      View All Case Studies
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className={`transition font-medium hover:text-blue-600 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              About
            </a>
            <a href="#" className={`transition font-medium hover:text-blue-600 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Blog
            </a>
            <a href="#" className={`transition font-medium hover:text-blue-600 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes style={{fontSize: '24px'}} /> : <FaBars style={{fontSize: '24px'}} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-t border-gray-200 px-6 py-4 rounded-b-2xl">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              Case Studies
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              Blog
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition font-medium py-2">
              Contact
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition font-medium mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;