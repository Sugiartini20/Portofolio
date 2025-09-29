import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Kalkulator Bangun Datar",
      description: "Kalkulator interaktif untuk menghitung luas berbagai bangun datar.",
      link: "/products",
    },
    {
      id: 2, 
      title: "Website Portofolio",
      description: "Website portofolio responsif dengan React dan Tailwind CSS.",
      link: "/",
    },
    {
      id: 3,
      title: "Project E-commerce", 
      description: "Platform e-commerce lengkap dengan cart dan checkout system.",
      link: "https://web-application-e-commerce.vercel.app/",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
      
      <div className="space-y-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {project.link.startsWith("http") ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Lihat Project
              </a>
            ) : (
              <a 
                href={project.link}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Lihat Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}