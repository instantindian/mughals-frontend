
import React, { useState } from 'react';
import HomeDeliveryCard from './AddressForm';

const DeliveryMode = () => {    
      const [activeTab, setActiveTab] = useState('online');
      const [selectDelivery,setselectActiveDelivery] = useState('selected')
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

      const handleHomeDeliveryChange = (address) => {
        setselectActiveDelivery(address);
      }
    
      return (
        <div className="max-w-md mx-auto bg-white   shadow-lg ">
          <div className="flex gap-1 bg-gray-200 rounded-xl p-1">
            <button
              className={`flex-1 p-4 text-center rounded-xl font-semibold ${
                activeTab === 'online' ? 'bg-black text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleTabChange('online')}
            >
              Online Order
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center rounded-xl font-semibold ${
                activeTab === 'pickup' ? 'bg-black text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleTabChange('pickup')}
            >
              Pickup Order
            </button>
          </div>
          <div className="p-4">
            {activeTab === 'online' ? (
              <div>
                {/* Online Order Content */}
                <h2 className="text-sm text-gray-600 font-semibold mb-4">
                    <p className='text-sm text-black/[0.6]'>Enter your Delivery address</p>                 
                    
                      <HomeDeliveryCard/>
                    
                    
                </h2>
                {/* Add your form fields and layout here */}
              </div>
            ) : (
              <div>
                {/* Pickup Order Content */}
                <h2 className="text-lg font-semibold mb-4">
                  Select the resturant
                  
                </h2>
                {/* Add your form fields and layout here */}
              </div>
            )}
          </div>
        </div>
      );
}

export default DeliveryMode