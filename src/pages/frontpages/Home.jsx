import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Kalkulator Luas Bangun Datar",
      description: "Kalkulator interaktif untuk menghitung luas berbagai bangun datar.",
      link: "/calculator",
      status: "ready"
    },
    {
      id: 2, 
      title: "Website Portofolio",
      description: "Website portofolio responsif yang menampilkan proyek, keahlian, dan informasi kontak.",
      link: "/",
      status: "ready"
    },
    {
      id: 3,
      title: "UI/UX E-Commerce", 
      description: "Desain UI/UX untuk platform e-commerce (dalam pengembangan).",
      link: "/ecommerce",
      status: "coming-soon"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {project.status === "coming-soon" ? (
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium inline-block">
                Segera Hadir
              </div>
            ) : (
              <Link 
                to={project.link}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Lihat Detail
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}