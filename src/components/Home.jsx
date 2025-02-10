import React from 'react';

const Home = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 mt-16 px-10">
        <img 
          src="/profil.png" 
          alt="Profile" 
          className="w-100 h-100 rounded-full border-gray-700 mb-6 md:mb-0 md:mr-10"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h2>
          <p className="text-gray-400 mb-6">
            Final-year student with knowledge in Web Development and Software Testing. Experienced in PHP Framework, JavaScript, SQL, and Google Cloud. Enthusiastic about web development, quality assurance, and cloud engineering.
          </p>
          <a 
            href="/cv-portofolio.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </header> 
  );
};

export default Home;