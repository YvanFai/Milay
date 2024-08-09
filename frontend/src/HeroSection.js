import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-50">
      <div className="hero-text md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Des experts pour vos projets IT & Data
        </h1>
        <p className="text-lg text-gray-700">
          Confiez la réalisation de vos projets Web/Data à nos équipe d’experts. PyFree vous accompagne pour mettre entre vos mains une solution sur mesure répondant à vos besoins. Une prestation en remote, alliant coût et qualité pour vous permettre de vous concentrer sur votre cœur de métier et stimuler votre croissance.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition transform hover:scale-105">
            <ion-icon name="arrow-forward-outline" className="mr-2"></ion-icon>
            Nos services
          </a>
          <a href="#" className="inline-flex items-center px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg shadow-lg transition transform hover:scale-105">
            <ion-icon name="arrow-forward-outline" className="mr-2"></ion-icon>
            Discuter avec nos experts
          </a>
        </div>
      </div>

      <div className="hero-img md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/company-library/what-is-pages/what-is-a-service-desk.jpg.thumb.320.320.png"
          alt="Service Desk"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
