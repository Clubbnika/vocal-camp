'use client';
import React, { useState } from 'react';
import PolicyModal from './Policy';

interface PrivacyCheckboxProps {
  onCheckChange: (isChecked: boolean) => void;
  isChecked: boolean;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({
  onCheckChange,
  isChecked,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckChange(event.target.checked);
  };

  return (
    <>
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
          <label
            htmlFor="privacy-checkbox"
            className="font-medium text-white text-xs md:text-sm"
          >
            Я даю згоду на обробку моїх персональних даних згідно з{' '}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-[#ff00be] hover:text-white hover:underline transition duration-300"
            >
              Політикою конфіденційності
            </button>
            .
          </label>
        </div>
      </div>

      <PolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PrivacyCheckbox;