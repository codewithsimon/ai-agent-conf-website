import React from 'react';
import { Users, ArrowLeft, Shield, Heart, HandHeart, AlertTriangle, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Code of Conduct
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating a safe, inclusive, and respectful environment for all participants at the AI Agent Conference
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Commitment */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                The AI Agent Conference is dedicated to providing a harassment-free conference experience for everyone, 
                regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, 
                body size, race, ethnicity, religion (or lack thereof), or technology choices.
              </p>
              <p>
                We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not 
                appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media.
              </p>
            </div>
          </div>

          {/* Expected Behavior */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Expected Behavior</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Be Respectful",
                  description: "Treat all participants with respect and courtesy, regardless of their background or experience level."
                },
                {
                  title: "Be Inclusive",
                  description: "Welcome newcomers and help create an environment where everyone feels comfortable participating."
                },
                {
                  title: "Be Professional",
                  description: "Maintain professional conduct in all interactions, both online and offline."
                },
                {
                  title: "Be Constructive",
                  description: "Provide constructive feedback and engage in meaningful discussions that benefit the community."
                },
                {
                  title: "Be Mindful",
                  description: "Be aware of your words and actions and how they might affect others in the community."
                },
                {
                  title: "Be Collaborative",
                  description: "Work together to create a positive learning environment for all participants."
                }
              ].map((behavior, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{behavior.title}</h3>
                  <p className="text-gray-600">{behavior.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unacceptable Behavior */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Unacceptable Behavior</h2>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <p className="text-gray-700 mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Verbal or written abuse, threats, or discriminatory language</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Harassment, intimidation, or stalking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Inappropriate sexual attention or unwelcome advances</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Disrupting talks, workshops, or other conference events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Publishing private communications without consent</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Other conduct that could reasonably be considered inappropriate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Consequences */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Consequences</h2>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <p className="text-gray-700 mb-4">
                Participants asked to stop any harassing behavior are expected to comply immediately. 
                If a participant engages in harassing behavior, the conference organizers may take any action 
                they deem appropriate, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Warning the offender</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Expulsion from the conference without refund</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Banning from future conferences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reporting to appropriate authorities when necessary</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Reporting */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <HandHeart className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Reporting Incidents</h2>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <p className="text-gray-700 mb-6">
                If you are being harassed, notice that someone else is being harassed, or have any other concerns, 
                please contact a member of conference staff immediately. Conference staff can be identified by their 
                special badges and will be introduced at the beginning of the event.
              </p>
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>stephen.simon@csharp.com</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  All reports will be handled with discretion and confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Scope</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This Code of Conduct applies to all conference participants, including attendees, speakers, sponsors, 
                volunteers, and staff, in all conference venues and conference-related social events.
              </p>
              <p>
                This includes online spaces such as the conference website, social media channels, virtual conference 
                platforms, and any other digital spaces associated with the AI Agent Conference.
              </p>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgment</h2>
            <p className="text-gray-700 mb-4">
              This Code of Conduct is adapted from the Conference Code of Conduct and other community guidelines. 
              We are committed to making the AI Agent Conference a welcoming and safe space for all participants.
            </p>
            <p className="text-gray-700">
              By participating in the AI Agent Conference, you agree to abide by this Code of Conduct.
            </p>
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
            Creating a safe and inclusive environment for all participants
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

export default CodeOfConduct;