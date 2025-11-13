import { useState, useEffect, useRef } from 'react';
import { 
  FaChevronDown, FaBullseye, FaChartLine, FaSearch, FaShare, FaEnvelope, 
  FaChartBar, FaBullhorn, FaPencilAlt, FaMobile, FaShoppingCart, FaGlobe, 
  FaBars, FaTimes, FaPalette, FaCode, FaBolt, FaUsers,
  FaBriefcase, FaVideo, FaCamera, FaDesktop, FaMicrochip, 
  FaDatabase, FaCloud, FaRocket, FaCrown, FaMagic
} from 'react-icons/fa';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeCaseTab, setActiveCaseTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const serviceCategories = [
    {
      icon: <FaPalette />,
      title: "Design & Branding",
      description: "Create memorable visual identities",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      services: [
        { icon: <FaBullseye />, name: "Brand Strategy", description: "Define your brand essence" },
        { icon: <FaPalette />, name: "Logo Design", description: "Iconic visual identity" },
        { icon: <FaPencilAlt />, name: "UI/UX Design", description: "User-centric experiences" },
        { icon: <FaDesktop />, name: "Web Design", description: "Beautiful interfaces" },
        { icon: <FaMobile />, name: "Mobile App Design", description: "Touch-optimized design" },
        { icon: <FaCamera />, name: "Photography", description: "Professional imagery" }
      ]
    },
    {
      icon: <FaCode />,
      title: "Development",
      description: "Build powerful digital solutions",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      services: [
        { icon: <FaGlobe />, name: "Web Development", description: "Custom web solutions" },
        { icon: <FaMobile />, name: "Mobile Apps", description: "iOS & Android apps" },
        { icon: <FaShoppingCart />, name: "E-commerce", description: "Online stores" },
        { icon: <FaDatabase />, name: "CMS Development", description: "Content management" },
        { icon: <FaCloud />, name: "Cloud Solutions", description: "Scalable infrastructure" },
        { icon: <FaCode />, name: "Custom Software", description: "Tailored applications" }
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Grow your online presence",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      services: [
        { icon: <FaSearch />, name: "SEO Optimization", description: "Rank higher on Google" },
        { icon: <FaBullhorn />, name: "Google Ads & PPC", description: "Paid advertising" },
        { icon: <FaShare />, name: "Social Media Marketing", description: "Engage your audience" },
        { icon: <FaEnvelope />, name: "Email Marketing", description: "Nurture campaigns" },
        { icon: <FaChartBar />, name: "Analytics & Insights", description: "Data-driven decisions" },
        { icon: <FaBolt />, name: "Marketing Automation", description: "Workflow optimization" }
      ]
    },
    {
      icon: <FaVideo />,
      title: "Content & Media",
      description: "Engage with compelling content",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
      services: [
        { icon: <FaPencilAlt />, name: "Content Writing", description: "Compelling copy" },
        { icon: <FaVideo />, name: "Video Production", description: "Visual storytelling" },
        { icon: <FaCamera />, name: "Photography", description: "Professional shoots" },
        { icon: <FaMicrochip />, name: "Animation & Motion", description: "Dynamic visuals" },
        { icon: <FaBullhorn />, name: "Podcast Production", description: "Audio content" },
        { icon: <FaGlobe />, name: "Blog Management", description: "Content strategy" }
      ]
    }
  ];

  const caseStudyCategories = [
    {
      title: "E-commerce",
      icon: <FaShoppingCart />,
      color: "#3B82F6",
      cases: [
        { title: "Fashion Retailer Transformation", client: "StyleCo", result: "300% Revenue Growth", industry: "Fashion" },
        { title: "Beauty Brand Launch", client: "GlowUp", result: "150% Sales Increase", industry: "Beauty" },
        { title: "Sports Equipment Store", client: "FitGear", result: "250% Online Sales", industry: "Sports" },
        { title: "Electronics Marketplace", client: "TechHub", result: "400% Traffic Growth", industry: "Electronics" }
      ]
    },
    {
      title: "SaaS & Tech",
      icon: <FaCode />,
      color: "#8B5CF6",
      cases: [
        { title: "Startup Growth Strategy", client: "InnovateTech", result: "500% User Growth", industry: "SaaS" },
        { title: "App Store Optimization", client: "MobileFirst", result: "10x Downloads", industry: "Mobile" },
        { title: "B2B Platform Launch", client: "BusinessPro", result: "200% Lead Generation", industry: "B2B" },
        { title: "AI Tool Marketing", client: "SmartAI", result: "300% Brand Awareness", industry: "AI" }
      ]
    },
    {
      title: "Healthcare",
      icon: <FaUsers />,
      color: "#10B981",
      cases: [
        { title: "Hospital Digital Transformation", client: "MedCenter", result: "85% Patient Satisfaction", industry: "Healthcare" },
        { title: "Telehealth Platform", client: "CareConnect", result: "300% User Adoption", industry: "Telehealth" },
        { title: "Medical Device Launch", client: "HealthTech", result: "150% Market Share", industry: "MedTech" },
        { title: "Wellness App Success", client: "WellBeing", result: "2M+ Active Users", industry: "Wellness" }
      ]
    },
    {
      title: "Finance",
      icon: <FaChartLine />,
      color: "#F59E0B",
      cases: [
        { title: "Fintech App Growth", client: "PaySmart", result: "500K+ Downloads", industry: "Fintech" },
        { title: "Investment Platform", client: "WealthGrow", result: "200% Client Base", industry: "Investment" },
        { title: "Banking Digital Strategy", client: "SecureBank", result: "90% Digital Adoption", industry: "Banking" },
        { title: "Crypto Exchange Launch", client: "CoinTrader", result: "1M+ Users", industry: "Cryptocurrency" }
      ]
    }
  ];

  return (
    <>
      <header 
        ref={headerRef}
        onMouseMove={handleMouseMove}
        className={`w-full z-[9999] transition-all duration-700 ease-out ${
          isScrolled ? 'fixed top-0 left-0' : 'absolute top-8'
        }`}
      >
        <div className={`${isScrolled ? 'container mx-auto px-4 py-2' : 'w-[90%] max-w-6xl mx-auto'}`}>
          <div 
            className={`relative rounded-2xl border shadow-lg backdrop-blur-md overflow-visible transition-all duration-700 ${
              isScrolled 
                ? 'bg-amber-50/95 border-amber-200/60 shadow-amber-900/20' 
                : 'bg-amber-100/20 border-amber-200/40 shadow-amber-900/30'
            }`}
          >

            <div className="relative px-8 py-4">
              <div className="flex items-center justify-between gap-8">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className={`relative p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 ${
                    isScrolled 
                      ? 'bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg shadow-amber-500/30' 
                      : 'bg-gradient-to-br from-amber-700 to-amber-800'
                  }`}>
                    <FaCrown className={`text-xl ${isScrolled ? 'text-amber-100' : 'text-amber-100'} drop-shadow-lg`} />
                  </div>
                  
                  <div>
                    <h1 className={`text-lg font-bold transition-all duration-500 ${
                      isScrolled 
                        ? 'text-amber-800' 
                        : 'text-white'
                    }`}>
                      Branding Pioneers
                    </h1>
                    <div className={`text-xs font-medium flex items-center gap-1.5 ${
                      isScrolled ? 'text-amber-600' : 'text-amber-200'
                    }`}>
                      <FaRocket className="text-xs" />
                      Digital Excellence
                    </div>
                  </div>
                </div>

                {/* Center Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                  {/* Services Mega Menu */}
                  <div 
                    className="relative group/menu"
                    onMouseEnter={() => setActiveMenu('services')}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className={`group px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden ${
                      isScrolled 
                        ? 'text-amber-800 hover:text-white' 
                        : 'text-white hover:text-amber-100'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <span className="relative z-10 text-sm">Services</span>
                      <FaChevronDown className={`relative z-10 text-xs transition-transform duration-300 ${
                        activeMenu === 'services' ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 transition-all duration-300 ${
                        activeMenu === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                      }`}
                      style={{ zIndex: 99999 }}
                    >
                      <div className="w-[450px] bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl shadow-xl border border-amber-200/50 overflow-hidden backdrop-blur-xl">
                        {/* Tabs */}
                        <div className="flex border-b border-amber-200/30 bg-gradient-to-r from-amber-100/50 to-stone-100/50 p-3 gap-3">
                          {serviceCategories.map((category, index) => (
                            <button
                              key={index}
                              onMouseEnter={() => setActiveServiceTab(index)}
                              className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-300 relative overflow-hidden ${
                                activeServiceTab === index
                                  ? 'text-white shadow-md scale-105 bg-gradient-to-r from-amber-600 to-amber-700'
                                  : 'text-amber-800 hover:text-amber-900 hover:bg-amber-100/50'
                              }`}
                            >
                              
                              <div className="relative z-10 flex flex-col items-center gap-1">
                                <div className="text-lg">
                                  {category.icon}
                                </div>
                                <span className="text-[10px]">{category.title}</span>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1 text-amber-900">
                              {serviceCategories[activeServiceTab].title}
                            </h3>
                            <p className="text-xs text-amber-700/80">{serviceCategories[activeServiceTab].description}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {serviceCategories[activeServiceTab].services.map((service, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="group/card p-3 rounded-xl border border-amber-200/60 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-br from-white to-amber-50/30"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white text-sm mb-2 group-hover/card:scale-110 transition-transform duration-300 shadow-md">
                                    {service.icon}
                                  </div>
                                  <h4 className="font-bold text-amber-900 mb-1 text-xs">
                                    {service.name}
                                  </h4>
                                  <p className="text-[10px] text-amber-700/70 leading-relaxed">{service.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>

                          <div className="p-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 text-white flex justify-between items-center shadow-md">
                            <div>
                              <p className="font-bold text-sm mb-1">Ready to get started?</p>
                              <p className="text-xs text-amber-100">Let's bring your vision to life</p>
                            </div>
                            <button className="bg-white text-amber-800 px-4 py-2 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-amber-50 text-xs">
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Studies Mega Menu */}
                  <div 
                    className="relative group/menu"
                    onMouseEnter={() => setActiveMenu('cases')}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className={`group px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden ${
                      isScrolled 
                        ? 'text-amber-800 hover:text-white' 
                        : 'text-white hover:text-amber-100'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <span className="relative z-10 text-sm">Case Studies</span>
                      <FaChevronDown className={`relative z-10 text-xs transition-transform duration-300 ${
                        activeMenu === 'cases' ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 transition-all duration-300 ${
                        activeMenu === 'cases' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                      }`}
                      style={{ zIndex: 99999 }}
                    >
                      <div className="w-[400px] bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl shadow-xl border border-amber-200/50 overflow-hidden backdrop-blur-xl">
                        <div className="flex border-b border-amber-200/30 bg-gradient-to-r from-amber-100/50 to-stone-100/50 p-3 gap-3">
                          {caseStudyCategories.map((category, index) => (
                            <button
                              key={index}
                              onMouseEnter={() => setActiveCaseTab(index)}
                              className={`flex-1 px-2 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${
                                activeCaseTab === index
                                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md scale-105'
                                  : 'text-amber-800 hover:bg-amber-100/50 hover:text-amber-900'
                              }`}
                            >
                              <div className="flex items-center justify-center gap-1">
                                <span className="text-sm">{category.icon}</span>
                                <span className="text-[10px]">{category.title}</span>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-3 mb-4">
                            {caseStudyCategories[activeCaseTab].cases.slice(0, 2).map((caseStudy, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="group/card p-3 rounded-xl border border-amber-200/60 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50/30 relative overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white text-sm shadow-md group-hover/card:scale-110 transition-transform duration-300">
                                      {caseStudyCategories[activeCaseTab].icon}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-amber-900 text-xs mb-1">{caseStudy.title}</h4>
                                      <div className="flex items-center gap-2 text-[10px] text-amber-700/70">
                                        <FaBriefcase className="text-[10px]" />
                                        <span>{caseStudy.client}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                                    <FaChartLine />
                                    {caseStudy.result}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>

                          <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md text-xs">
                            View All Success Stories
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#" className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                    isScrolled ? 'text-amber-800 hover:text-white' : 'text-white hover:text-amber-100'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative z-10 text-sm">About</span>
                  </a>
                  
                  <a href="#" className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                    isScrolled ? 'text-amber-800 hover:text-white' : 'text-white hover:text-amber-100'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative z-10 text-sm">Blog</span>
                  </a>
                  
                  <a href="#" className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                    isScrolled ? 'text-amber-800 hover:text-white' : 'text-white hover:text-amber-100'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative z-10 text-sm">Contact</span>
                  </a>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <button className="relative group bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 font-bold text-sm hover:scale-110 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <FaRocket className="group-hover:rotate-45 transition-transform duration-500" />
                      Get Started
                      <FaMagic className="group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                  className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                    isScrolled ? 'text-amber-800 hover:bg-amber-100' : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 rounded-b-3xl animate-slideDown">
                <nav className="flex flex-col gap-4">
                  <a href="#" className="text-gray-800 hover:text-purple-600 transition font-semibold py-2 px-4 rounded-lg hover:bg-purple-50">
                    Services
                  </a>
                  <a href="#" className="text-gray-800 hover:text-blue-600 transition font-semibold py-2 px-4 rounded-lg hover:bg-blue-50">
                    Case Studies
                  </a>
                  <a href="#" className="text-gray-800 hover:text-green-600 transition font-semibold py-2 px-4 rounded-lg hover:bg-green-50">
                    About
                  </a>
                  <a href="#" className="text-gray-800 hover:text-orange-600 transition font-semibold py-2 px-4 rounded-lg hover:bg-orange-50">
                    Blog
                  </a>
                  <a href="#" className="text-gray-800 hover:text-pink-600 transition font-semibold py-2 px-4 rounded-lg hover:bg-pink-50">
                    Contact
                  </a>
                  <button className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition mt-2">
                    Get Started
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </>
  );
};

export default Header;
