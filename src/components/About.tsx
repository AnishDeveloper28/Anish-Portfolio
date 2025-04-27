import React, { useEffect, useRef } from 'react';
import { User, MapPin, Calendar, Languages } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={aboutRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I am a dedicated Frontend Web Developer passionate about crafting visually stunning, highly functional, and user-focused web experiences. With a degree in Computer Applications and ongoing studies in MCA, I combine strong technical expertise with creative problem-solving to deliver innovative solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I specialize in building responsive websites and dynamic web applications using modern tools and frameworks such as React.js, JavaScript, HTML5, CSS3, and Bootstrap. I thrive on tackling challenging projects that inspire me to expand my skill set and embrace emerging technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            Beyond coding, I stay active playing badminton and football, and I keep up with the latest trends in web development to ensure my work remains cutting-edge.
            </p>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Personal Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Full Name</h4>
                  <p className="font-medium">Anish Jain</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Birth Date</h4>
                  <p className="font-medium">April 17, 2002</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="font-medium">Udaipur, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Languages size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Languages</h4>
                  <p className="font-medium">English, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;