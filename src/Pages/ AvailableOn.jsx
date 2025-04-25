import React from 'react';

const platforms = [
  { name: 'Flipkart', logo: 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png', alt: 'flipkart' },
  { name: 'Blinkit', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/2048px-Blinkit-yellow-app-icon.svg.png', alt: 'Blinkit' },
  { name: 'Swiggy', logo: 'https://cdn.worldvectorlogo.com/logos/swiggy-1.svg', alt: 'Swiggy' },
  { name: 'Zepto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/2560px-Zepto_Logo.svg.png', alt: 'Zepto' },
  { name: 'Amazon', logo: 'https://www.svgrepo.com/show/112049/amazon-logo.svg', alt: 'Amazon' },
];

const AvailableOn = () => {
  return (
    <div className="bg-[#fefce9] py-24 text-center">
      <h2 className="text-4xl font-bold text-[#401f25] mb-8">AVAILABLE ON</h2>
      <div className="flex justify-center items-center gap-20 flex-wrap">
        {platforms.map((platform) => (
          <img
            key={platform.name}
            src={platform.logo}
            alt={platform.alt}
            className="h-20   object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableOn;

