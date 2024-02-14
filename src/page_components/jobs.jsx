import React from "react";
import Advertisements from "./advertise";
import { FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Jobs({data}){


                const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
      };
      // Chunk the data array into groups of approximately 1/3 elements
      const chunkedData = chunkArray(data, Math.ceil(data.length / 3));

    return(
        
    <div className="w-full mr-7 mt-2 ml-3">
            <Advertisements />


            {chunkedData.map((data, groupIndex) => (
        <React.Fragment key={groupIndex}>




        {data.map((job,index)=> (




            <div className="group text-sm ">
            
            <div key={index} className={index <Math.ceil(data.length/2) ?'group-hover:h-24 ease-in-out group-hover:bg-opacity-70 items-center flex p-1 border my-1 rounded-lg bg-orange-200' : 'group-hover:h-24 ease-in-out group-hover:bg-opacity-70 items-center flex p-1 border my-1 rounded-lg bg-orange-50'}>
            <div className="w-16 h-16 overflow-hidden rounded-full">
            <img className="w-15 h-15  object-cover object-center"
            src={job.imgPath}

            /></div>
            <div>
            <div className="group-hover:text-lg mb-1 hover:opacity-60 flex *:font-semibold capitalize *:mx-2">
            <h1>{job.title}</h1>
            <h1><span className="inline-block mx-1 h-2 w-2 bg-black rounded-full"></span>{job.company}</h1>
            </div>
             <div className="flex *:rounded-full mb-1 *:p-1 *:px-2 *:mx-2">
            <h1 className="border border-slate-300">{job.stream}</h1>
            <h1 className="bg-orange-950 text-orange-100">{job.salary}</h1>
            <h1 className="bg-slate-300">{job.country}</h1>
            </div>

            </div>

            <div className="flex space-x-8 items-center ml-auto">
            <h1 className="text-blac">{job.timeOfPost}</h1>
            <div className="group-hover:flex space-x-6 hidden *:rounded-xl *:p-2 *:px-3 *:mx-2">
            <button className= "bg-orange-950 text-orange-100 hover:bg-white hover:border hover:text-orange-950 hover:border-slate-500">Apply</button>
            <button className="flex items-center  border border-orange-950 hover:opacity-45">See More<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg></button>

</div>

            </div>

    </div></div>
        ))}
        {(groupIndex + 1) % Math.ceil(chunkedData.length / 3) === 0 && (
            <div className="flex items-center p-2 border my-1 rounded-lg bg-orange-950 ">

            <IconContext.Provider value={{size:"1.5rem", color:"#ffcc80"}}>
            <FaLock />

            </IconContext.Provider>
            <div className="text-orange-200 font-semibold flex flex-grow justify-between items-center p-3 capitalize">
            <p>
               unlock 1023,32 additional remote jobs,advanced search & email notifictaoins 
            </p>
            <button className="bg-orange-200 text-orange-950 rounded-lg p-2">Get Access</button>

            </div>
            </div>


        )}

        </React.Fragment> 
            ))}
    </div>
    
    );
}