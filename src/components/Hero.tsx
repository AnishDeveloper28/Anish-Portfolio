import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        ref={heroRef}
        className="container mx-auto px-6 py-16 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hello, I'm <span className="text-blue-600 dark:text-blue-400">Anish Jain</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Frontend Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            As a dedicated Front-End Web Developer, I am passionate about crafting dynamic, intuitive, and visually stunning web experiences. My expertise lies in developing responsive websites and web applications that function flawlessly across all devices, ensuring an exceptional user experience (UX). I prioritize performance optimization, accessibility, and code quality to deliver projects that meet the highest standards of excellence. Proficient in modern tools like React.js, TypeScript, and Tailwind CSS, I build scalable, maintainable, and efficient front-end solutions tailored to project needs. By keeping pace with evolving industry trends and best practices, I continuously refine my skills to create innovative digital products that delight users and surpass expectations.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AnishDeveloper28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anishjainwebdeveloper"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:anishsinghvi4@gmail.com" 
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-xl">
              <img 
                src="/profile.jpg"
                alt="Anish Jain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;