import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, setSelectedOption, selectedOption }) => {
  const [isClicked, setisClicked] = useState(false);

  const ref = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdownHandler = () => setisClicked((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !dropdownRef.current.contains(e.target)) {
        setisClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[ref]);
    
  return ( 
    <div className='relative cursor-pointer'>
      <div 
        className="rounded-lg text-xl text-between inline-flex items-center" 
        onClick={toggleDropdownHandler}
        ref={ref}
      >
        {selectedOption}
        <ChevronDownIcon className={`w-6 ml-4 rounded-full ${isClicked ? "rotate-180 bg-gray-light" : ""} transition-all duration-300`} strokeWidth={2} />
      </div>

      <div className="bg-white rounded-2xl shadow-xl w-44 absolute right-0 mt-4 overflow-hidden" ref={dropdownRef}>
        {
          isClicked && (
            <ul className="text-2xl text-center text-gray-700" aria-labelledby="dropdownDefaultButton">
              {options.map((option, i) => 
                <li className='cursor-pointer' key={i} onClick={() => {toggleDropdownHandler(); setSelectedOption(option)}}>
                  <p className="py-3 hover:bg-gray-light">{option}</p>
                </li>
              )}
            </ul>   
          )
        }
      </div>
    </div>
  )
}

export default Dropdown
