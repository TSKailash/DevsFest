import React from 'react';
import { Code, Smartphone, Globe, Shield, Brain } from 'lucide-react';

const DomainCard = ({ icon: Icon, title, description }) => (
  <div className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border rounded-lg p-4">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-md">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="space-y-4 mt-4">
      <div className="flex gap-3">
        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex-1 text-center font-medium">
          Challenge
        </button>
        <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 flex-1 text-center font-medium">
          Submit
        </button>
      </div>
    </div>
  </div>
);

const P2p = () => {
  const domains = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create innovative mobile experiences that solve real-world problems. Master modern frameworks and best practices."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive, dynamic websites using cutting-edge technologies and design principles."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn to protect digital assets and master the art of ethical hacking and security best practices."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Dive into AI algorithms and data analysis to create intelligent solutions for complex problems."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
          P2p X DevOps
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our specialized learning tracks and take on exciting challenges
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain, index) => (
          <DomainCard key={index} {...domain} />
        ))}
      </div>
    </div>
  );
};

export default P2p;
