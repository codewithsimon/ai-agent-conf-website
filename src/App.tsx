import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Twitter, 
  Linkedin, 
  Youtube,
  Menu,
  X,
  MapPin,
  Star,
  Mic,
  Code,
  Zap,
  Play,
  Sparkles,
  TrendingUp,
  ChevronDown,
  Award,
  Target,
  Bot,
  Workflow,
  Database,
  Settings,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'speakers'];
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

  const speakers = [
    {
      name: "Mahesh Chand",
      title: "Founder and CEO CSharp Inc.",
      image: "/Mahesh Chand.jpg",
      linkedin: "https://www.linkedin.com/in/mchand/",
      twitter: "https://x.com/mcbeniwal"
    },
    {
      name: "Allen O'Neill",
      title: "CTO @ SocialVoice.ai | Microsoft RD and MVP in AI",
      image: "/allen-oneill.jpg",
      linkedin: "https://www.linkedin.com/in/allenoneill/",
      twitter: "https://x.com/DataBytesAI"
    },
    {
      name: "Stephen SIMON",
      title: "Cloud & AI Advocate",
      image: "/Stephen SIMON.jpg",
      linkedin: "https://www.linkedin.com/in/codewithsimon/",
      twitter: "https://x.com/codewithsimon"
    }
  ];

  const aiTools = [
    {
      name: "Crew AI",
      description: "Autonomous AI Agent Orchestration",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Azure AI Foundry",
      description: "Enterprise AI Development Suite",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      name: "Google Agent Development Kit",
      description: "AI Agent Creation Framework",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "n8n",
      description: "Workflow Automation Platform",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      name: "LangChain",
      description: "Large Language Model Application Framework",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600"
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
              {['About', 'Speakers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
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
              {['About', 'Speakers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 font-medium"
                >
                  {item}
                </button>
              ))}
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
            <div className="mb-8">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Sparkles className="w-4 h-4" />
                <span>Live Virtual Conference</span>
              </div>
              
              {/* Enhanced Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI Agents
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient-x">
                  Conference 2025
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join <span className="text-blue-600 font-semibold">industry leaders</span>, 
                <span className="text-teal-600 font-semibold"> researchers</span>, and 
                <span className="text-purple-600 font-semibold"> innovators</span> as we explore the cutting-edge of AI agent technology. 
                Discover the future of autonomous systems and intelligent automation.
              </p>
            </div>

            {/* Enhanced Event Details Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-white/20">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">August 22, 2025</div>
                  <div className="text-sm text-gray-600">Save the date</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-white/20">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">9:00 AM - 3:00 PM EST</div>
                  <div className="text-sm text-gray-600">6 hours of content</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-white/20">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Virtual Event</div>
                  <div className="text-sm text-gray-600">Join from anywhere</div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Claim</div>
                <div className="text-sm text-gray-600">Your Spot</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-16">
              <button
                onClick={() => scrollToSection('registration')}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative">Register Now</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About the Conference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The premier virtual event bringing together the brightest minds in AI agent development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Attend AI Agents Conference?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-blue-600" />,
                    title: "World-Class Speakers",
                    description: "Learn from leading AI researchers, engineers, and entrepreneurs who are shaping the future"
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-blue-600" />,
                    title: "Global Community",
                    description: "Connect with professionals from around the world in our interactive virtual environment"
                  },
                  {
                    icon: <Star className="w-6 h-6 text-blue-600" />,
                    title: "Cutting-Edge Insights",
                    description: "Discover the latest breakthroughs in AI agent technology and practical applications"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Learn Essential AI Development Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Master these cutting-edge AI development platforms and automation tools:
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {aiTools.map((tool, index) => (
              <div key={index} className="group">
                <div className={`${tool.bgColor} rounded-2xl p-8 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 ${tool.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={tool.textColor}>
                        {tool.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tool.name}
                    </h3>
                    <p className={`${tool.textColor} font-medium text-sm`}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Master These Tools?
              </h3>
              <p className="text-gray-600 mb-6">
                Join us to explore hands-on tutorials and real-world applications of these powerful AI development platforms.
              </p>
              <button
                onClick={() => scrollToSection('registration')}
                className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Join the Conference</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Speakers 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry pioneers who are defining the future of AI agents. Adding more speakers regularly. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100">
                  <div className="text-center">
                    {/* Larger Square Speaker Image */}
                    <div className="w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-6">
                      {speaker.title}
                    </p>
                    
                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200 group/social"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600 group-hover/social:scale-110 transition-transform duration-200" />
                      </a>
                      <a
                        href={speaker.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200 group/social"
                      >
                        <X className="w-5 h-5 text-gray-700 group-hover/social:scale-110 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to Speak Section - Improved Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-12 lg:p-16">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <Mic className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Share Your Expertise
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Join our lineup of distinguished speakers and share your insights with the global AI community. 
                    We're looking for innovative thinkers and practitioners.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <Award className="w-5 h-5 text-blue-600" />,
                      text: "Showcase your expertise to 500+ AI professionals"
                    },
                    {
                      icon: <Target className="w-5 h-5 text-blue-600" />,
                      text: "Build your personal brand in the AI community"
                    },
                    {
                      icon: <Users className="w-5 h-5 text-blue-600" />,
                      text: "Network with industry leaders and researchers"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://forms.office.com/r/4Xmg7AzHSU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Apply to Speak</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Right Visual */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                      <Mic className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-yellow-800" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Voice Matters
                  </h3>
                  <p className="text-gray-600 max-w-sm">
                    Share your unique perspective and help shape the future of AI agent technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of the AI agent revolution. 
            Register now and secure your spot at this exclusive virtual event.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
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
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a
              href="https://www.c-sharpcorner.com/events/ai-agent-conference-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Register Now - $9.99</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-gray-500 mt-4">
              By registering, you agree to receive conference updates and materials.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Organizer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Code className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join C# Corner - Your Premier AI-Powered Learning Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              C# Corner is a leading upskilling and growth platform that empowers developers through AI-driven learning experiences.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Ready to accelerate your development journey?
            </p>
            <a
              href="https://www.csharp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">AI Agents Conference</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
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
                {['About', 'Speakers', 'Registration'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                ))}
                <Link
                  to="/code-of-conduct"
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Code of Conduct
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>stephen.simon@csharp.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>www.aiagentsconference.live</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Agents Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;