import React from 'react';

const Projectcard = ({ title, description, githubUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={"https://github.com/satriarangga17"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Projectcard;