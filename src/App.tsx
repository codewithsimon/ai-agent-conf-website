import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, Star, Award, Crown, Globe, Mic, Share2, Trophy, Video, Play, Mail, ExternalLink, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);

  const speakers = [
    {
      name: "Mahesh Chand",
      title: "Founder & CEO, C# Corner",
      image: "/Mahesh Chand.jpg",
      bio: "Mahesh Chand is the founder of C# Corner, one of the world's largest developer communities. With over 25 years of experience in software development and technology leadership, Mahesh has been instrumental in building platforms that connect millions of developers worldwide. He's a Microsoft MVP, published author, and recognized speaker who has helped shape the careers of countless developers through education and community building.",
      topics: ["AI Strategy", "Developer Communities", "Technology Leadership"]
    },
    {
      name: "Stephen Simon",
      title: "VP Engineering, C# Corner",
      image: "/Stephen SIMON.jpg",
      bio: "Stephen Simon is the VP of Engineering at C# Corner, bringing over 20 years of experience in software architecture and engineering leadership. He specializes in building scalable platforms and has been at the forefront of implementing AI-driven solutions in developer tools. Stephen has led multiple successful digital transformation initiatives and is passionate about leveraging AI to enhance developer productivity.",
      topics: ["AI Engineering", "Scalable Architecture", "Developer Tools"]
    },
    {
      name: "Allen O'Neill",
      title: "AI Solutions Architect",
      image: "/allen-oneill.jpg",
      bio: "Allen O'Neill is a seasoned AI Solutions Architect with extensive experience in designing and implementing enterprise-scale AI agent systems. With a background in machine learning and distributed systems, Allen has helped numerous organizations successfully deploy AI agents that drive business value. He's particularly known for his work in multi-agent orchestration and AI system reliability.",
      topics: ["AI Agent Architecture", "Multi-Agent Systems", "Enterprise AI"]
    }
  ];

  const sponsors = [
    { name: "Microsoft Copilot", logo: "/Microsoft Copilot Logo.png", tier: "title" },
    { name: "Cursor IDE", logo: "/Cursor IDE Logo.png", tier: "platinum" },
    { name: "LangChain", logo: "/LangChain-logo.png", tier: "gold" },
    { name: "CrewAI", logo: "/Crew AI.png", tier: "gold" },
    { name: "N8n", logo: "/N8n-logo-new.svg.png", tier: "silver" },
    { name: "Azure AI Foundry", logo: "/azure-ai-foundry.png", tier: "silver" },
    { name: "Agent Development Kit", logo: "/agent-development-kit.png", tier: "silver" },
    { name: "Eleven Labs", logo: "/Eleven Labs Symbol Logo.png", tier: "silver" }
  ];

  const agenda = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Welcome & Opening Keynote",
      speaker: "Mahesh Chand",
      description: "Setting the stage for AI Agents in 2025"
    },
    {
      time: "9:30 AM - 10:15 AM",
      title: "The Future of AI Agent Architecture",
      speaker: "Allen O'Neill",
      description: "Deep dive into scalable AI agent systems and design patterns"
    },
    {
      time: "10:15 AM - 10:30 AM",
      title: "Coffee Break & Networking",
      speaker: "",
      description: "Connect with fellow developers and AI enthusiasts"
    },
    {
      time: "10:30 AM - 11:15 AM",
      title: "Building Production-Ready AI Agents",
      speaker: "Stephen Simon",
      description: "Best practices for deploying AI agents at scale"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Panel Discussion: AI Agents in Enterprise",
      speaker: "All Speakers",
      description: "Real-world case studies and implementation strategies"
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Lunch Break & Sponsor Showcase",
      speaker: "",
      description: "Explore sponsor booths and network with industry leaders"
    },
    {
      time: "1:00 PM - 1:45 PM",
      title: "Hands-on Workshop: Your First AI Agent",
      speaker: "Community Leaders",
      description: "Interactive session building AI agents from scratch"
    },
    {
      time: "1:45 PM - 2:30 PM",
      title: "AI Agent Security & Ethics",
      speaker: "Industry Experts",
      description: "Ensuring responsible AI agent development"
    },
    {
      time: "2:30 PM - 3:00 PM",
      title: "Closing Remarks & Next Steps",
      speaker: "Mahesh Chand",
      description: "Key takeaways and future of AI agent development"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('nav');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-sm');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.add('bg-transparent');
          header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-sm');
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AI Agent Conference</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Speakers</button>
              <button onClick={() => scrollToSection('agenda')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Agenda</button>
              <button onClick={() => scrollToSection('sponsors')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Sponsors</button>
              <button 
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
              >
                Register Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left">About</button>
                <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left">Speakers</button>
                <button onClick={() => scrollToSection('agenda')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left">Agenda</button>
                <button onClick={() => scrollToSection('sponsors')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left">Sponsors</button>
                <button 
                  onClick={() => scrollToSection('register')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 text-left w-fit"
                >
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              August 22, 2025 • Virtual Conference
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Agents
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Conference 2025
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders and innovators as we explore the cutting-edge of AI agent technology. 
              Learn, network, and shape the future of intelligent automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Register for Free
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              View Agenda
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry pioneers and AI thought leaders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
              <p className="text-gray-600">Connect with developers and innovators worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Content</h3>
              <p className="text-gray-600">Discover the latest in AI agent technology and trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Conference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI Agents Conference 2025 brings together the brightest minds in artificial intelligence 
              to explore the future of autonomous agents and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keynote Presentations</h4>
                    <p className="text-gray-600">Inspiring talks from industry leaders on the future of AI agents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hands-on Workshops</h4>
                    <p className="text-gray-600">Interactive sessions to build and deploy your own AI agents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Networking Opportunities</h4>
                    <p className="text-gray-600">Connect with peers, mentors, and potential collaborators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Panel Discussions</h4>
                    <p className="text-gray-600">Deep dives into real-world AI agent implementations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">August 22, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">9:00 AM - 3:00 PM EST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Virtual Conference</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Expected 5,000+ Attendees</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Free Registration:</strong> This conference is completely free to attend, 
                  made possible by our generous sponsors and the C# Corner community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts who are shaping the future of AI agents and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{speaker.title}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {speaker.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedSpeaker(expandedSpeaker === index ? null : index)}
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">
                        {expandedSpeaker === index ? 'Show Less' : 'Read Bio'}
                      </span>
                      {expandedSpeaker === index ? 
                        <ChevronUp className="w-4 h-4 ml-1" /> : 
                        <ChevronDown className="w-4 h-4 ml-1" />
                      }
                    </button>
                  </div>

                  {expandedSpeaker === index && (
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {speaker.bio}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conference Agenda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A full day of insights, workshops, and networking opportunities designed to advance your AI agent expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {agenda.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {item.time}
                        </div>
                        {item.speaker && (
                          <div className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                            {item.speaker}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thank you to our amazing sponsors who make this conference possible and free for all attendees.
            </p>
          </div>

          {/* Sponsor Logos */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Sponsorship Packages</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our community of forward-thinking companies and showcase your brand to thousands of AI enthusiasts.
              </p>
            </div>

            {/* Enhanced Sponsorship Table with Horizontal Scroll */}
            <div className="overflow-x-auto">
              <div className="min-w-[1000px]">
                <div className="grid grid-cols-4 gap-6">
                  {/* Title Sponsorship */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-3">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        EXCLUSIVE
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Title</h4>
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        $5,000
                      </div>
                    </div>
                  </div>

                  {/* Platinum Sponsorship */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Platinum</h4>
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        $3,000
                      </div>
                    </div>
                  </div>

                  {/* Gold Sponsorship */}
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl mb-3">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Gold</h4>
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                        $2,000
                      </div>
                    </div>
                  </div>

                  {/* Silver Sponsorship */}
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Silver</h4>
                      <div className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                        $1,000
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Table */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-4 gap-0">
                    {/* Feature Headers */}
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-5 font-bold text-gray-900 border-r border-gray-200">Features</div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-5 font-bold text-gray-900 border-r border-gray-200">Platinum</div>
                    <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-5 font-bold text-gray-900 border-r border-gray-200">Gold</div>
                    <div className="bg-gradient-to-br from-gray-100 to-slate-100 p-5 font-bold text-gray-900">Silver</div>

                    {/* Logo Placement */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Globe className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Logo Placement</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">Top + Exclusive Banner</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">Top Section</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">Middle Section</div>
                    <div className="p-5 border-b border-gray-200 text-center text-gray-700">Bottom Section</div>

                    {/* Speaking Slot */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Mic className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Speaking Slot</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">Keynote or Panel</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">15 min session</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">10 min session</div>
                    <div className="p-5 border-b border-gray-200 text-center text-gray-700">5 min session</div>

                    {/* Social Media */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Share2 className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Social Media</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">Weekly</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">3 posts</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-gray-700">2 posts</div>
                    <div className="p-5 border-b border-gray-200 text-center text-gray-700">1 post</div>

                    {/* Event Day Recognition */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Trophy className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Event Day Recognition</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-b border-gray-200 text-center text-green-600">✓</div>

                    {/* Webinar/Demo */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Video className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Webinar/Demo</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-b border-gray-200 text-center text-red-500">✗</div>

                    {/* Recorded Session */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center">
                      <Play className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-700">Recorded Session</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600">✓</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-red-500">✗</div>
                    <div className="p-5 border-b border-gray-200 text-center text-red-500">✗</div>

                    {/* C# Corner Newsletter - Title Exclusive */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center bg-gradient-to-r from-yellow-50 to-orange-50">
                      <Mail className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="text-gray-700">C# Corner Newsletter</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">EXCLUSIVE</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600 bg-gradient-to-r from-yellow-50 to-orange-50">765K subscribers</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-red-500">No</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-red-500">No</div>
                    <div className="p-5 border-b border-gray-200 text-center text-red-500">No</div>

                    {/* C# Corner Social Media - Title Exclusive */}
                    <div className="p-5 border-r border-b border-gray-200 flex items-center bg-gradient-to-r from-yellow-50 to-orange-50">
                      <Share2 className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="text-gray-700">C# Corner Social Media</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">EXCLUSIVE</span>
                    </div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-green-600 bg-gradient-to-r from-yellow-50 to-orange-50">Weekly (2M+ reach)</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-red-500">No</div>
                    <div className="p-5 border-r border-b border-gray-200 text-center text-red-500">No</div>
                    <div className="p-5 border-b border-gray-200 text-center text-red-500">No</div>

                    {/* Pre & Post Conference Promotions - Title Exclusive */}
                    <div className="p-5 border-r flex items-center bg-gradient-to-r from-yellow-50 to-orange-50">
                      <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="text-gray-700">Pre & Post Conference Promotions</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">EXCLUSIVE</span>
                    </div>
                    <div className="p-5 border-r text-center text-green-600 bg-gradient-to-r from-yellow-50 to-orange-50">✓</div>
                    <div className="p-5 border-r text-center text-red-500">No</div>
                    <div className="p-5 border-r text-center text-red-500">No</div>
                    <div className="p-5 text-center text-red-500">No</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 mb-6">
                * All sponsorship packages include logo placement on conference materials and website. Title sponsorship includes exclusive C# Corner community benefits.
              </p>
              <a
                href="mailto:stephen.simon@csharp.com"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Register now for free and be part of the premier AI Agents conference. 
            Don't miss this opportunity to learn from industry leaders and connect with the global AI community.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-blue-100">Expected Attendees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-blue-100">Expert Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-blue-100">Hours of Content</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.c-sharpcorner.com/events/ai-agents-conference-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Register for Free
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Full Agenda
            </button>
          </div>

          <p className="text-blue-100 mt-6 text-sm">
            By registering, you'll receive conference updates and exclusive AI content from C# Corner.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">AI Agent Conference</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Join the premier virtual conference exploring the cutting-edge of AI agent technology. 
                Connect with industry leaders and shape the future of intelligent automation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>August 22, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>9:00 AM - 3:00 PM EST</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors duration-200">About</button>
                <button onClick={() => scrollToSection('speakers')} className="block text-gray-400 hover:text-white transition-colors duration-200">Speakers</button>
                <button onClick={() => scrollToSection('agenda')} className="block text-gray-400 hover:text-white transition-colors duration-200">Agenda</button>
                <button onClick={() => scrollToSection('sponsors')} className="block text-gray-400 hover:text-white transition-colors duration-200">Sponsors</button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <a href="mailto:stephen.simon@csharp.com" className="block hover:text-white transition-colors duration-200">
                  stephen.simon@csharp.com
                </a>
                <a href="https://www.c-sharpcorner.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-200">
                  www.c-sharpcorner.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 C# Corner. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/code-of-conduct" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Code of Conduct
              </Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;