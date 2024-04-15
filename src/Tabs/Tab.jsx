import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Tab() {
const menu = [
        { id: 1, title: 'All', url: '/' },
        { id: 2, title: 'Burgers', url: '/Burgers' },
        { id: 3,  title: 'Pizza', url: '/Pizza' },
        { id: 4, title: 'Donuts', url: '/Donuts' },
        { id: 5, title: 'Sandwich', url: '/Sandwich' },
        { id: 6, title: 'Salades', url: '/Salades' },
      ];
  const [selectedTab, setSelectedTab] = useState(menu[0].id);
 

  return (
    <div className="">
        
       


      <div className="tabs-container overflow-x-auto pl-4">
        <div className="flex gap-2">
          {menu.map((item) => (
            <div key={item.id} className="relative shadow-md rounded-xl border-gray-300 border inline-block ">
              
                <div
                  onClick={() => setSelectedTab(item.id)}
                  className={`tab flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-[8px] cursor-pointer transition-colors ${
                    selectedTab === item.id ? 'bg-[#28509E] text-white' : 'hover:bg-[#28509E] hover:text-white'
                  }`}
                > 
                  <h2 className="text-[14px] mb-0">{item.title}</h2>
                </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tab;
