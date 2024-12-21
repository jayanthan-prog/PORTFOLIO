import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './ui/SocialLink';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="animate-slide-up text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Jayanthan S K</span>
        </h1>
        <p className="animate-slide-up text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | WordPress Expert | Network Engineer
        </p>
        <div className="animate-fade-in flex justify-center space-x-6 mb-12">
          <SocialLink href="https://github.com/jayanthansmilee" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/jayanthan-s-k-80798829a" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:jayanthan.ei23@bitsathy.ac.in" icon={<Mail size={24} />} label="Email" />
        </div>
        <a 
          href="#contact"
          className="animate-fade-in inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}