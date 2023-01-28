import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react";

const Dropdown = () => {
    const [isClicked, setisClicked] = useState(false);
    function click() {
        setisClicked(function (oldValue) {
          return !oldValue;
        });
    }
    

    return ( 
        <>
            <div id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-xl px-4 py-2.5 text-between inline-flex items-center
             dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
             onClick = {click}>
                Zone
                {
                    isClicked
                    ? <ChevronUpIcon className="stroke-white w-5" strokeWidth={2} onClick={click}/>
                    : <ChevronDownIcon className="stroke-white w-5" strokeWidth={2} onClick={click}/>
                }
            </div>

            <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                {
                    isClicked && (
                        <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Zone A</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Zone B</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Zone C</a>
                                </li>
                            </ul>
                        </div>         
                    )
                }
            </div>
        </>
    )
}

export default Dropdown