import React from 'react';

const RecommendationsSection = () => {
  const recommendations = [
    {
      name: 'Garlic Naan Kit',
      price: '$4.50',
      rating: '4.8',
      reviews: '450',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOop-pUMP-dLvjXtKcKDN7LcfAJZv4vixgYc9KzhB5Ztvviv6G8S94NU8cH7pO2-SJZJ8paOPcAml9078s_u-Jw7tWSBwdqT71MQmbkc2HrUjd8CzyrpNCZ1tgvawo4k2RlhDUfqeDGAgfk3MDesqkk43zylYhxvx5Galp2vauxZCXo4AAj8lvSX71rJ5fkEVkLqYBKEtMlGaZHIQIfLbj_TUQzW6CQ9SIBxkgHvx9FMiqz-9T0AX7rwKrGFCODqUXfOITxJ9K9wA'
    },
    {
      name: 'Crispy Veggie Samosas',
      price: '$6.00',
      rating: '4.9',
      reviews: '892',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxsEcvA1wUnWrVAv4KGsaU71ILN7cHrv2oI1pl1IhqgkBFhQvVbcmvBlQUdmxdrss8RXeFB9vKmFdOFyiBnk4F_IaQWIMAqWKEBPPF-Kqq6ZMwaY1u-sS7pdvg7CO66eR4755EdCtXSlpyb5-0HbMxrcxkAWOrCkgWm1Gv6QvDW7Mf4oQ-CLDRbRlGQ8qs5r1_6Pkvy3DWcd4eOZ9CwM7QRqjk-pAtvoyMNvcpm1QUPp14VzflKnHupo6lNhd1WsJpWfiM3-q2VxI'
    },
    {
      name: 'Mango Lassi Kit',
      price: '$3.99',
      rating: '5.0',
      reviews: '1.2k',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrOQK-JOqGJb71Bt-i2MgD7UMISNa1izqYNfuOxngDP0cUSsnvxeo73N4jqLJ4KFFXk0CFoY4Po4ZiweYb0QK7lpncxADDSdiDABqHyEU3ayTMQvdlFhyVwR_DG30vtjUARWWCpDorM-bVjjpeJalZC2gTClWfcClpaCqAYDfMnYfT5qZG5tXMo4Vu3CYxM5eOSb1I2donXKKxsnFLsth4YsWS7gFqVIWPoQ60AkO8Revz9tEr-WehBffEbhuaoXj52SOBUsAcVu8'
    },
    {
      name: 'Gulab Jamun',
      price: '$5.50',
      rating: '4.7',
      reviews: '210',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLyEnuSRxSY79Obr2tLpCKNJSSxWnhfej76lJDsgyFOC07JQanLgMMsQdx-n4GLmxuNCROtDsoqkPrqS4VTzsB9UgY7mgRjgmeAPFjk_CUQZ-o_3EX_KTxvlgMv9l57kCZkwa93LVI49zLkKECk5xe1QW0uTjfovqDPhbNxAi5A4PCSzyNb6r7SozFD5txp6m8Yl-Tv0NT9VqhsQXfJOirV2lC7qdr4dVWq8ulJeD32ZsmEowtqtGkZYjvog6HA0v7CeMDPC-G5E8'
    }
  ];

  return (
    <div className="mt-8 pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-extrabold text-[#1a1b24]">Complete Your Meal</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-orange-600 bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center transition-colors shadow-sm">
            <span className="material-icons text-sm">chevron_left</span>
          </button>

          <button className="w-8 h-8 rounded-full border border-orange-600 bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center transition-colors shadow-sm">
            <span className="material-icons text-sm">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x">
        {recommendations.map((item, idx) => (
          <div key={idx} className="min-w-[260px] snap-start bg-white rounded-[1.2rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col">
            <div className="h-44 overflow-hidden relative">
              <img alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} />
              
              {/* Corazón en la imagen */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/95 rounded-full text-gray-300 hover:text-red-500 transition-colors shadow-sm flex items-center justify-center border border-gray-100">
                <span className="material-icons text-[16px]">favorite_border</span>
              </button>
            </div>
            
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-extrabold text-[#1a1b24] text-[15px] truncate">{item.name}</h3>
                <div className="flex items-center gap-1 mt-1.5 mb-5">
                  <span className="material-icons text-[15px] text-[#FFC107]">star</span>
                  <span className="text-[13px] font-bold text-gray-700">{item.rating}</span>
                  <span className="text-[12px] text-gray-400 font-medium ml-0.5">({item.reviews})</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-extrabold text-[#ef6c00] text-[16px]">{item.price}</span>
                <button className="w-8 h-8 rounded-full bg-[#ef6c00]/10 text-[#ef6c00] hover:bg-[#ef6c00]/20 transition-colors flex items-center justify-center">
                  <span className="material-icons text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
