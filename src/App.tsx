import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  Globe, 
  ArrowRight, 
  Star, 
  Award, 
  Shield, 
  Crown,
  Check, 
  Minus,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Play,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);

  const speakers = [
    {
      name: "Mahesh Chand",
      title: "Founder, C# Corner",
      company: "C# Corner",
      image: "/Mahesh Chand.jpg",
      bio: "Mahesh Chand is the founder of C# Corner, one of the world's largest developer communities. With over 20 years of experience in software development and community building, Mahesh has been instrumental in shaping the careers of millions of developers worldwide. He's a Microsoft MVP, published author, and passionate advocate for AI and emerging technologies.",
      topic: "The Future of AI Agents in Enterprise Development"
    },
    {
      name: "Stephen Simon",
      title: "VP of Developer Relations",
      company: "C# Corner",
      image: "/Stephen SIMON.jpg",
      bio: "Stephen Simon is the VP of Developer Relations at C# Corner, where he leads initiatives to connect developers with cutting-edge technologies. With extensive experience in AI, machine learning, and developer advocacy, Stephen has been at the forefront of the AI agent revolution, helping organizations implement intelligent automation solutions.",
      topic: "Building Production-Ready AI Agents: Best Practices and Pitfalls"
    },
    {
      name: "Allen O'Neill",
      title: "Senior AI Solutions Architect",
      company: "Microsoft",
      image: "/allen-oneill.jpg",
      bio: "Allen O'Neill is a Senior AI Solutions Architect at Microsoft, specializing in enterprise AI implementations and agent-based systems. With over 15 years of experience in cloud computing and AI, Allen has helped numerous Fortune 500 companies transform their operations through intelligent automation and AI agents.",
      topic: "Scaling AI Agents in the Cloud: Azure AI Platform Deep Dive"
    }
  ];

  const sponsors = [
    { name: "Microsoft Copilot", logo: "/Microsoft Copilot Logo.png", tier: "title" },
    { name: "CrewAI", logo: "/Crew AI.png", tier: "platinum" },
    { name: "LangChain", logo: "/LangChain-logo.png", tier: "gold" },
    { name: "Cursor IDE", logo: "/Cursor IDE Logo.png", tier: "gold" },
    { name: "N8n", logo: "/N8n-logo-new.svg.png", tier: "silver" },
    { name: "Azure AI Foundry", logo: "/azure-ai-foundry.png", tier: "silver" },
    { name: "Agent Development Kit", logo: "/agent-development-kit.png", tier: "silver" },
    { name: "Eleven Labs", logo: "/Eleven Labs Symbol Logo.png", tier: "silver" }
  ];

  const agenda = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Opening Keynote: The AI Agent Revolution",
      speaker: "Mahesh Chand",
      type: "keynote"
    },
    {
      time: "9:30 AM - 10:15 AM",
      title: "Building Production-Ready AI Agents",
      speaker: "Stephen Simon",
      type: "talk"
    },
    {
      time: "10:15 AM - 10:30 AM",
      title: "Coffee Break & Networking",
      speaker: "",
      type: "break"
    },
    {
      time: "10:30 AM - 11:15 AM",
      title: "Azure AI Platform for Enterprise Agents",
      speaker: "Allen O'Neill",
      type: "talk"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Panel: The Future of Autonomous Systems",
      speaker: "All Speakers",
      type: "panel"
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Lunch Break",
      speaker: "",
      type: "break"
    },
    {
      time: "1:00 PM - 1:45 PM",
      title: "Hands-on Workshop: Building Your First AI Agent",
      speaker: "Workshop Leaders",
      type: "workshop"
    },
    {
      time: "1:45 PM - 2:30 PM",
      title: "AI Agents in Real-World Applications",
      speaker: "Industry Experts",
      type: "talk"
    },
    {
      time: "2:30 PM - 3:00 PM",
      title: "Closing Remarks & Next Steps",
      speaker: "Organizing Committee",
      type: "closing"
    }
  ];

  const toggleSpeaker = (index: number) => {
    setExpandedSpeaker(expandedSpeaker === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AI Agent Conference</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#speakers" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Speakers</a>
              <a href="#agenda" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Agenda</a>
              <a href="#sponsors" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Sponsors</a>
              <Link to="/code-of-conduct" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Code of Conduct</Link>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Virtual Conference 2025
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Agent
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Conference
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join industry leaders and innovators as we explore the cutting-edge of AI agent technology. 
              Learn, network, and shape the future of autonomous systems.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold text-gray-800">August 22, 2025</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-semibold text-gray-800">9:00 AM - 3:00 PM EST</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600/10 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Format</p>
                <p className="font-semibold text-gray-800">Virtual Event</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Register for Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Trailer</span>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Join 8,000+ developers and AI enthusiasts</p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Interactive Workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Networking Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from industry pioneers who are shaping the future of AI agents and autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{speaker.title}</p>
                    <p className="text-gray-500 text-sm mb-4">{speaker.company}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Speaking Topic:</h4>
                      <p className="text-gray-600 text-sm italic">"{speaker.topic}"</p>
                    </div>
                    
                    <button 
                      onClick={() => toggleSpeaker(index)}
                      className="flex items-center justify-between w-full text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      {expandedSpeaker === index ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                    
                    {expandedSpeaker === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Agenda</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A full day of insights, workshops, and networking opportunities designed to advance your AI agent expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {agenda.map((item, index) => (
                <div key={index} className={`flex items-start space-x-6 p-6 rounded-xl transition-all duration-200 hover:shadow-md ${
                  item.type === 'keynote' ? 'bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-500' :
                  item.type === 'break' ? 'bg-gray-100' :
                  item.type === 'workshop' ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500' :
                  item.type === 'panel' ? 'bg-gradient-to-r from-teal-50 to-green-50 border-l-4 border-teal-500' :
                  'bg-white border border-gray-200'
                }`}>
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.type === 'keynote' ? 'bg-blue-100' :
                      item.type === 'break' ? 'bg-gray-200' :
                      item.type === 'workshop' ? 'bg-purple-100' :
                      item.type === 'panel' ? 'bg-teal-100' :
                      'bg-gray-100'
                    }`}>
                      {item.type === 'keynote' && <Star className="w-6 h-6 text-blue-600" />}
                      {item.type === 'break' && <Clock className="w-6 h-6 text-gray-600" />}
                      {item.type === 'workshop' && <Users className="w-6 h-6 text-purple-600" />}
                      {item.type === 'panel' && <Users className="w-6 h-6 text-teal-600" />}
                      {(item.type === 'talk' || item.type === 'closing') && <Play className="w-6 h-6 text-gray-600" />}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">{item.time}</span>
                    </div>
                    {item.speaker && (
                      <p className="text-gray-600">
                        <span className="font-medium">Speaker:</span> {item.speaker}
                      </p>
                    )}
                    {item.type === 'keynote' && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Keynote Session
                        </span>
                      </div>
                    )}
                    {item.type === 'workshop' && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Hands-on Workshop
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to reach 8,000+ AI developers and industry professionals
            </p>
          </div>

          {/* Sponsorship Comparison Table */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <Crown className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Title</div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">$5,000</div>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          EXCLUSIVE
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Crown className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Platinum</div>
                            <div className="text-2xl font-bold text-purple-600">$1,500</div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Gold</div>
                            <div className="text-2xl font-bold text-yellow-600">$1,000</div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Silver</div>
                            <div className="text-2xl font-bold text-gray-600">$500</div>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Logo on Website
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Top + Exclusive Banner</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Top Placement</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Mid Placement</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Footer</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Speaking Slot
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Keynote or Panel</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Keynote or Panel</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Breakout Talk</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Panel</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Social Media Mentions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Weekly</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Weekly</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">2-times a month</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Monthly</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Event Day Recognition
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Webinar/Demo
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Recorded Session
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Title Sponsor Exclusive Features */}
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      C# Corner Newsletter
                      <div className="text-xs text-gray-500">765K subscribers</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-yellow-600 mt-1 font-medium">Exclusive</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      C# Corner Social Media
                      <div className="text-xs text-gray-500">2M+ combined reach</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-yellow-600 mt-1 font-medium">Weekly</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Pre & Post Conference Promotions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="text-xs text-yellow-600 mt-1 font-medium">Exclusive</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center border-l border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-6">
              * Title Sponsorship is limited to one sponsor only. All packages include event day recognition and professional networking opportunities.
            </p>
            <a
              href="mailto:stephen.simon@csharp.com?subject=AI Agent Conference Sponsorship Inquiry&body=Hi, I'm interested in learning more about sponsorship opportunities for the AI Agent Conference. Please send me more details."
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Become a Sponsor</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600">
              Thank you to our amazing sponsors who make this conference possible
            </p>
          </div>

          {/* Title Sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Title Sponsor</h3>
            <div className="flex justify-center">
              {sponsors.filter(sponsor => sponsor.tier === 'title').map((sponsor, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-200">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-16 w-auto mx-auto filter hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Platinum Sponsors</h3>
            <div className="flex justify-center">
              {sponsors.filter(sponsor => sponsor.tier === 'platinum').map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-12 w-auto mx-auto filter hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {sponsors.filter(sponsor => sponsor.tier === 'gold').map((sponsor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-yellow-200">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-10 w-auto mx-auto filter hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Silver Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {sponsors.filter(sponsor => sponsor.tier === 'silver').map((sponsor, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-8 w-auto mx-auto filter hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
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
                <span className="font-bold text-xl">AI Agent Conference</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Join the premier virtual conference exploring the cutting-edge of AI agent technology. 
                Connect with industry leaders and shape the future of autonomous systems.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#speakers" className="hover:text-white transition-colors duration-200">Speakers</a></li>
                <li><a href="#agenda" className="hover:text-white transition-colors duration-200">Agenda</a></li>
                <li><a href="#sponsors" className="hover:text-white transition-colors duration-200">Sponsors</a></li>
                <li><Link to="/code-of-conduct" className="hover:text-white transition-colors duration-200">Code of Conduct</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stephen.simon@csharp.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Virtual Event</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Agent Conference. All rights reserved. Organized by C# Corner.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;