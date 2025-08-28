import React from 'react';
import { Users, ArrowLeft, Crown, Award, Star, Globe, Mic, Share2, Trophy, Video, Play, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sponsorship() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AI Agent Conference</span>
            </Link>
            
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Conference</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Crown className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sponsorship Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us to reach thousands of AI professionals and showcase your brand to the global AI community
          </p>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect sponsorship tier to maximize your brand exposure and connect with AI professionals worldwide
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <thead>
                  <tr>
                    <th className="p-6 text-left bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Crown className="w-6 h-6" />
                        <span className="text-lg font-bold">Title</span>
                        <span className="bg-white/20 px-2 py-1 rounded-full text-xs">EXCLUSIVE</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">$5,000</div>
                    </th>
                    <th className="p-6 text-left bg-gradient-to-br from-purple-500 to-purple-700 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-6 h-6" />
                        <span className="text-lg font-bold">Platinum</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">$3,000</div>
                    </th>
                    <th className="p-6 text-left bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-6 h-6" />
                        <span className="text-lg font-bold">Gold</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">$2,000</div>
                    </th>
                    <th className="p-6 text-left bg-gradient-to-br from-gray-400 to-gray-600 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-6 h-6" />
                        <span className="text-lg font-bold">Silver</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">$1,000</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">Top + Exclusive Banner</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-purple-600" />
                        <span>Top of website</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-yellow-600" />
                        <span>Middle of website</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-600" />
                        <span>Bottom of website</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">Keynote or Panel</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4 text-purple-600" />
                        <span>30-minute slot</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4 text-yellow-600" />
                        <span>20-minute slot</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4 text-gray-600" />
                        <span>10-minute slot</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">Weekly</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-purple-600" />
                        <span>5 posts</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-yellow-600" />
                        <span>3 posts</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-gray-600" />
                        <span>1 post</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-purple-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-gray-600" />
                        <span>✓</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4 text-purple-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4 text-yellow-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4 text-gray-600" />
                        <span>✓</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4 text-purple-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4 text-yellow-600" />
                        <span>✓</span>
                      </div>
                    </td>
                    <td className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4 text-gray-600" />
                        <span>✓</span>
                      </div>
                    </td>
                  </tr>
                  {/* Title Exclusive Features */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gradient-to-r from-yellow-100 to-orange-100">
                    <td className="p-4 bg-gradient-to-r from-yellow-200 to-orange-200 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-yellow-700" />
                        <span className="font-bold text-yellow-800">765K Subscribers</span>
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">EXCLUSIVE</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gradient-to-r from-yellow-100 to-orange-100">
                    <td className="p-4 bg-gradient-to-r from-yellow-200 to-orange-200 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-yellow-700" />
                        <span className="font-bold text-yellow-800">Weekly, 2M+ Reach</span>
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">EXCLUSIVE</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gradient-to-r from-yellow-100 to-orange-100">
                    <td className="p-4 bg-gradient-to-r from-yellow-200 to-orange-200 border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-700" />
                        <span className="font-bold text-yellow-800">Extended Campaign</span>
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">EXCLUSIVE</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium border-r border-gray-200">No</td>
                    <td className="p-4 text-center text-gray-500 font-medium">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-6">
              * Title Sponsorship includes exclusive access to C# Corner's massive audience and extended promotional campaigns
            </p>
            <a
              href="mailto:stephen.simon@csharp.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us for Sponsorship
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sponsor Our Conference?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with thousands of AI professionals and showcase your brand to the global AI community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Global Reach",
                description: "Connect with thousands of AI professionals from around the world"
              },
              {
                icon: Trophy,
                title: "Brand Recognition",
                description: "Showcase your brand to industry leaders and decision makers"
              },
              {
                icon: Share2,
                title: "Social Media Exposure",
                description: "Extensive promotion across all our social media channels"
              },
              {
                icon: Video,
                title: "Content Marketing",
                description: "Recorded sessions and webinars for ongoing marketing value"
              },
              {
                icon: Globe,
                title: "Website Visibility",
                description: "Premium placement on our high-traffic conference website"
              },
              {
                icon: Mail,
                title: "Direct Access",
                description: "Exclusive newsletter access to our engaged subscriber base"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">AI Agent Conference</span>
          </div>
          <p className="text-gray-400 mb-6">
            Partner with us to reach the global AI community
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Conference</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Sponsorship;