
import { useState, useEffect } from "react";

const PhoneMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    {
      title: "Scan Meal",
      content: (
        <div className="space-y-2 p-4">
          <div className="w-24 h-20 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <div className="w-12 h-8 bg-orange-600 rounded-md"></div>
          </div>
          <div className="text-center text-xs text-gray-600 mb-4">Analyzing your meal...</div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-4 border-primary animate-pulse"></div>
          </div>
          <div className="text-center">
            <div className="w-20 h-8 bg-primary rounded-full mx-auto flex items-center justify-center">
              <span className="text-white text-xs font-bold">Scan</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Meal Results",
      content: (
        <div className="space-y-3 p-4">
          <div className="bg-green-100 border border-green-300 rounded-lg p-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <div className="text-xs font-semibold text-green-800">Safe</div>
            </div>
            <div className="text-xs text-green-700 mt-1">Grilled Chicken</div>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
              <div className="text-xs font-semibold text-yellow-800">Caution</div>
            </div>
            <div className="text-xs text-yellow-700 mt-1">Soft Cheese</div>
          </div>
          <div className="bg-red-100 border border-red-300 rounded-lg p-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
              <div className="text-xs font-semibold text-red-800">Avoid</div>
            </div>
            <div className="text-xs text-red-700 mt-1">Raw Fish</div>
          </div>
        </div>
      ),
    },
    {
      title: "Menu Scan",
      content: (
        <div className="space-y-2 p-4">
          <div className="w-full h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <div className="text-xs text-gray-600 font-medium">Restaurant Menu</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-700">Caesar Salad</div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-700">Sushi Roll</div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-700">Pasta Carbonara</div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] h-[560px] mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[40px]"></div>
      
      {/* Phone screen */}
      <div className="absolute inset-[3px] bg-white rounded-[38px] overflow-hidden">
        {/* Status bar */}
        <div className="h-6 bg-gray-100 flex justify-between items-center px-4">
          <div className="text-[10px] font-bold">9:41</div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
        
        {/* App header */}
        <div className="h-10 flex justify-center items-center border-b border-gray-200">
          <div className="text-sm font-bold text-primary">Pickle</div>
        </div>

        {/* App content */}
        <div className="flex justify-center pt-6">
          <div className="space-x-2 flex">
            {screens.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === currentScreen ? 'bg-primary' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="pt-2 text-center">
          <h3 className="font-medium">{screens[currentScreen].title}</h3>
        </div>
        
        <div className="mt-4">
          {screens[currentScreen].content}
        </div>
      </div>
      
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-2xl"></div>

      {/* Bottom indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded"></div>
    </div>
  );
};

export default PhoneMockup;
