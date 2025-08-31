import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Linkedin, 
  Youtube,
  Menu,
  X,
  MapPin,
  Star,
  Mic,
  Zap,
  Play,
  Sparkles,
  TrendingUp,
  ChevronDown,
  Award,
  Target,
  Building2,
  Handshake,
  Eye,
  Network,
  Crown,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const aiTools = [
    {
      name: "Crew AI",
      logo: "/Crew AI.png",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      name: "Azure AI Foundry",
      logo: "/azure-ai-foundry.png",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-600"
    },
    {
      name: "Google Agent Development Kit",
      logo: "/agent-development-kit.png",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600"
    },
    {
      name: "n8n",
      logo: "/N8n-logo-new.svg.png",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600"
    },
    {
      name: "LangChain",
      logo: "/LangChain-logo.png",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600"
    },
    {
      name: "Microsoft Copilot",
      logo: "/Microsoft Copilot Logo.png",
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      name: "Cursor IDE",
      logo: "/Cursor IDE Logo.png",
      color: "from-gray-600 to-black",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-600"
    },
    {
      name: "ElevenLabs",
      logo: "/Eleven Labs Symbol Logo.png",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600"
    }
  ];

  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AI Agents Conference</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'about'
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('registration')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Register Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('registration')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating blur circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Dot grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Live Virtual Conference Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Virtual Conference
              </span>
            </div>
            
            {/*Live Virtual Conference */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-4 font-medium">Brought to you by</p>
              <div className="flex items-center justify-center space-x-8 mb-8">
                <img
                  src="/AI-Circle.png"
                  alt="AI Circle"
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/CSharp Corner.png"
                  alt="C# Corner"
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="mb-8">
              {/* Enhanced Badge */}
          
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI Agents                
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join <span className="text-blue-600 font-semibold">industry leaders</span>, 
                <span className="text-teal-600 font-semibold"> researchers</span>, and 
                <span className="text-purple-600 font-semibold"> innovators</span> as we explore the cutting-edge of AI agent technology. 
                Discover the future of autonomous systems and intelligent automation.
              </p>
            </div>

            {/* Enhanced Event Details Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-12">
              <div className="flex items-center space-x-3 px-2 lg:px-4 py-2">
                <div className="w-6 lg:w-8 h-6 lg:h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-sm lg:text-base">October 29-31, 2025</div>
                  <div className="text-xs lg:text-sm text-gray-500">Save the date</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-300/50"></div>
              
              <div className="flex items-center space-x-3 px-2 lg:px-4 py-2">
                <div className="w-6 lg:w-8 h-6 lg:h-8 bg-teal-500/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 lg:w-5 h-4 lg:h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-sm lg:text-base">9:00 AM - 3:00 PM EST</div>
                  <div className="text-xs lg:text-sm text-gray-500">3 days of content</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-300/50"></div>
              
              <div className="flex items-center space-x-3 px-2 lg:px-4 py-2">
                <div className="w-6 lg:w-8 h-6 lg:h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Globe className="w-4 lg:w-5 h-4 lg:h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-sm lg:text-base">Virtual Event</div>
                  <div className="text-xs lg:text-sm text-gray-500">Join from anywhere</div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">30+</div>
                <div className="text-xs lg:text-sm text-gray-600">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-teal-600">2,000 +</div>
                <div className="text-xs lg:text-sm text-gray-600">Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">25+</div>
                <div className="text-xs lg:text-sm text-gray-600">Sessions</div>
              </div>
              
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-16">
              <button
                onClick={() => scrollToSection('registration')}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative">Register Now</span>
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 relative group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-semibold hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-4 lg:w-5 h-4 lg:h-5" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <ChevronDown className="w-6 h-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About the Conference
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The premier virtual event bringing together the brightest minds in AI agent development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Why Attend AI Agents Conference?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600" />,
                    title: "World-Class Speakers",
                    description: "Learn from leading AI researchers, engineers, and entrepreneurs who are shaping the future"
                  },
                  {
                    icon: <Globe className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600" />,
                    title: "Global Community",
                    description: "Connect with professionals from around the world in our interactive virtual environment"
                  },
                  {
                    icon: <Star className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600" />,
                    title: "Cutting-Edge Insights",
                    description: "Discover the latest breakthroughs in AI agent technology and practical applications"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 lg:w-12 h-10 lg:h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h3>
              <div className="space-y-4">
                {[
                  "Advanced AI agent architectures and design patterns",
                  "Scalable deployment strategies for production systems",
                  "Ethical considerations in AI agent development",
                  "Real-world case studies and success stories",
                  "Future trends and emerging technologies",
                  "Best practices for AI safety and reliability"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-6">
              <Target className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Conference Tracks
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore four comprehensive tracks covering the full spectrum of AI agent technology and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">🎛️</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900">Track 1: Agent Architectures & Infrastructure</h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Frameworks, orchestration, and platforms (LangChain, AutoGen, Azure AI Foundry, etc.)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Memory, reasoning, and planning in agents</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Evaluation, benchmarking, and reliability at scale</span>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900">Track 2: Applied AI Agents</h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Enterprise & industry use-cases (healthcare, finance, education, law, robotics)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Developer productivity & DevOps agents</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Multi-agent collaboration and workflows</span>
                </div>
              </div>
            </div>

            {/* Track 3 */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900">Track 3: Human-Centered AI</h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Human-AI collaboration and augmentation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Trust, safety, and alignment in autonomous systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Policy, governance, and ethical frameworks</span>
                </div>
              </div>
            </div>

            {/* Track 4 */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900">Track 4: The Future of Agents</h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Autonomous discovery, research, and innovation agents</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">The future of work and organizational impact</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Beyond LLMs: multimodal, reinforcement, and hybrid agent systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">Open source & community-driven agents</span>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Speakers Section - Hidden */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders and AI pioneers who are shaping the future of artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mahesh Chand",
                title: "Founder, C# Corner",
                image: "/Mahesh Chand.jpg",
                bio: "Microsoft MVP and renowned technology leader with 25+ years of experience in software development and AI innovation."
              },
              {
                name: "Stephen Simon",
                title: "Cloud and AI Advocate",
                image: "/Stephen SIMON.jpg",
                bio: "Expert in AI agent development and machine learning systems, leading enterprise AI initiatives."
              },
              {
                name: "Allen O'Neill",
                title: "AI Research Director",
                image: "/allen-oneill.jpg",
                bio: "Pioneer in autonomous agent systems with extensive experience in multi-agent architectures and distributed AI."
              },
              {
                name: "Harsha Gaddipati",
                title: "COO at slashy.ai",
                image: "/Harsha Gaddipati.jpg",
                bio: "Chief Operating Officer at slashy.ai, driving operational excellence and strategic growth in AI-powered solutions."
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{speaker.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* AI Tools Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-6">
              <Zap className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Learn Essential AI Development Tools
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Master these cutting-edge AI development platforms and automation tools:
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {aiTools.map((tool, index) => (
              <div key={index} className="group">
                <div className={`${tool.bgColor} rounded-2xl p-6 lg:p-8 border ${tool.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full`}>
                  <div className="text-center">
                    {/* Logo Container - Significantly Increased Size */}
                    <div className="w-32 lg:w-40 h-32 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center transition-transform duration-300">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className={`text-lg lg:text-xl font-bold hidden ${tool.textColor}`}>
                      {tool.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Ready to Master These Tools?
              </h3>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                Join us to explore hands-on tutorials and real-world applications of these powerful AI development platforms.
              </p>
              <button
                onClick={() => scrollToSection('registration')}
                className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Join the Conference</span>
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Sponsors Section */}
      {/* <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Handshake className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Partners & Sponsors
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with innovative companies that are shaping the future of AI technology
            </p>
          </div>

          {/* Partners Grid */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                name: "Ergo",
                logo: "/Ergo.jpg"
              },
              {
                name: "Onlook",
                logo: "/Onlook.jpg"
              },
              {
                name: "Pickle AI",
                logo: "/Pickle AI.jpg"
              },
              {
                name: "TraceRoot AI",
                logo: "/TraceRoot AI.jpg"
              }
            ].map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          {/* Call to Action - Hidden */}
          {/* <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8 border border-purple-100 max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Interested in Partnering?
              </h3>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                Join our growing community of partners and sponsors to showcase your brand to thousands of AI professionals.
              </p>
              <Link
                to="/sponsorship"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Crown className="w-4 lg:w-5 h-4 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Learn About Sponsorship</span>
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div> */}
        {/* </div>
      </section> */}

      {/* Speakers Section - Hidden */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders and AI pioneers who are shaping the future of artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mahesh Chand",
                title: "Founder, C# Corner",
                image: "/Mahesh Chand.jpg",
                bio: "Microsoft MVP and renowned technology leader with 25+ years of experience in software development and AI innovation."
              },
              {
                name: "Stephen Simon",
                title: "Cloud and AI Advocate",
                image: "/Stephen SIMON.jpg",
                bio: "Expert in AI agent development and machine learning systems, leading enterprise AI initiatives."
              },
              {
                name: "Allen O'Neill",
                title: "AI Research Director",
                image: "/allen-oneill.jpg",
                bio: "Pioneer in autonomous agent systems with extensive experience in multi-agent architectures and distributed AI."
              },
              {
                name: "Harsha Gaddipati",
                title: "COO at slashy.ai",
                image: "/Harsha Gaddipati.jpg",
                bio: "Chief Operating Officer at slashy.ai, driving operational excellence and strategic growth in AI-powered solutions."
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{speaker.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Apply to Speak Section - Hidden */}
      {/* <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-16">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-blue-100 rounded-2xl mb-6">
                    <Mic className="w-6 lg:w-8 h-6 lg:h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Share Your Expertise
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                    Join our lineup of distinguished speakers and share your insights with the global AI community. 
                    We're looking for innovative thinkers and practitioners.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <Award className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" />,
                      text: "Showcase your expertise to 8,000+ AI professionals"
                    },
                    {
                      icon: <Target className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" />,
                      text: "Build your personal brand in the AI community"
                    },
                    {
                      icon: <Users className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" />,
                      text: "Network with industry leaders and researchers"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 lg:w-8 h-6 lg:h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700 text-sm lg:text-base">{benefit.text}</span>
                    </div>
                  ))}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">10,000k</div>
              <div className="text-gray-600">Live Viewers</div>
            </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-16 flex items-center">
                <div className="w-full">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                      What We're Looking For
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Practical AI agent implementations",
                        "Novel research and breakthrough findings",
                        "Industry case studies and lessons learned",
                        "Technical deep-dives and tutorials",
                        "Ethical AI and responsible development",
                        "Future trends and emerging technologies"
                      ].map((topic, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm lg:text-base">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners & Sponsors Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Partners & Sponsors</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with innovative companies leading the AI revolution
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Ergo', logo: '/Ergo.jpg' },
              { name: 'Onlook', logo: '/Onlook.jpg' },
              { name: 'Pickle AI', logo: '/Pickle AI.jpg' },
              { name: 'TraceRoot AI', logo: '/TraceRoot AI.jpg' }
            ].map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 lg:w-24 lg:h-24 mx-auto mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Registration Section */}
      <section id="registration" className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of the AI agent revolution. 
            Register now and secure your spot at this exclusive virtual event.
          </p>
          
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="mb-8">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Secure Your Spot
              </div>
              <p className="text-gray-600">
                Limited seats available • All sessions included
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Access to all sessions and presentations",
                "Interactive Q&A with speakers",
                "Virtual networking opportunities",
                "Conference recordings available for 30 days",
                "Exclusive resources and materials"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-teal-600" />
                  <span className="text-gray-700 text-sm lg:text-base">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a
              href="https://www.c-sharpcorner.com/events/ai-agent-conference-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Claim Your Spot</span>
              <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
            </a>
            
            <p className="text-xs lg:text-sm text-gray-500 mt-4">
              By registering, you agree to receive conference updates and materials.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Organizer Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-48 lg:w-64 h-20 lg:h-28 mx-auto mb-8 flex items-center justify-center">
              <img
                src="/logo 3.png"
                alt="C# Corner logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join C# Corner - Your Premier AI-Powered Learning Community
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              C# Corner is a leading upskilling and growth platform that empowers developers through AI-driven learning experiences.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-base lg:text-lg text-gray-700 mb-6">
              Ready to accelerate your development journey?
            </p>
            <a
              href="https://www.csharp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Join Now</span>
              <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">AI Agents Conference</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-sm lg:text-base">
                The premier virtual event for AI agent technology, bringing together innovators, 
                researchers, and practitioners from around the world.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/CSharpDotTV" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <X className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/csharpdottv" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@CSharpDotTV" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('registration')}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Registration
                </button>
                <Link
                  to="/code-of-conduct"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Code of Conduct
                </Link>
                <Link
                  to="/sponsorship"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Sponsorship
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400 text-sm lg:text-base">
                  <Mail className="w-4 h-4" />
                  <span>stephen.simon@csharp.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm lg:text-base">
                  <Globe className="w-4 h-4" />
                  <span>www.aiagentsconference.live</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 AI Agents Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;