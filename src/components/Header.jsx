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
                    </div>
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

                          <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md text-xs">
                            View All Success Stories
                          </button>
                        </div>
                      </div>
                    </div>
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
