'use client';

import React, { useState } from 'react';

interface PrivacyCheckboxProps {
  onCheckChange: (isChecked: boolean) => void;
  isChecked: boolean;
  privacyLink: string;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({ 
  onCheckChange, 
  isChecked, 
  privacyLink 
}) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckChange(event.target.checked);
  };

  return (
    <div className="flex items-start mt-4">
      <div className="flex items-center h-5">
        <input
          id="privacy-checkbox"
          name="privacy-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          required 
          className="w-4 h-4 text-[#ff00be] bg-gray-100 border-gray-300 rounded cursor-pointer"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="privacy-checkbox" className="font-medium text-white">
          Я даю згоду на обробку моїх персональних даних згідно з
          <a
            href={privacyLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff00be] hover:text-white hover:underline ml-1 transition duration-300"
          >
            Політикою конфіденційності
          </a>
          .
        </label>
      </div>
    </div>
  );
};

export default PrivacyCheckbox;