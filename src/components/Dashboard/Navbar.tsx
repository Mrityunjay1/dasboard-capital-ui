import { useState } from "react";
import { Select, SelectOption } from "../Select";

const options: SelectOption[] = [
  { value: "option1", label: "Option 1", number: 50 },
  { value: "option2", label: "Option 2", number: 30 },
  { value: "option3", label: "Option 3", number: 20 },
];

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <div className="text-lg font-['Poppins'] font-semibold text-[#1d4ed8] w-full">
          London Internship Program
        </div>
        <div className="text-xs font-['Poppins'] font-light text-[#0b0b0b] w-min">
          London
        </div>
      </div>
      <div className="w-[300px] px-2">
        <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-black bg-white p-2 rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-black bg-white p-2 rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-black bg-white p-2 rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </div>
        <div className="w-[250px] px-1">
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
