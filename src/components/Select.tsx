import { useState } from "react";

export type SelectOption = {
  value: string;
  label: string;
  number: number;
};

type SelectProps = {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  return (
    <div className="relative flex flex-col items-center w-full rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white w-full px-2 py-2 text-[#1d4ed8] flex items-center justify-between font-medium text-sm rounded-lg tracking-wider"
      >
        {optionValue ? optionValue : "Opportunity Browsing"}
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="bg-white z-50 absolute top-12 flex flex-col items-start rounded-lg p-2 w-full">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setOptionValue(option.label);
                  setIsOpen(false);
                }}
                className="flex w-full p-4 text-black justify-between hover:bg-[#d1ddff] cursor-pointer rounded-r-lg border-l-transparent hover:text-[#1d4ed8]"
              >
                <h3>{option.label}</h3>
                <h3 className="bg-slate-100 p-1 rounded-lg hover:bg-[#d1ddff]">
                  {option.number}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
