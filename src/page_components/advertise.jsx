import React from "react";
import { FaShopify } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa";
import { SiYoutubetv } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link} from "react-router-dom"

export default function Advertisements(){


    return(
        <>
            <div className=" border border-r-2 rounded-lg bg-slate-50 relative">
            <a className="capitalize flex items-center cursor-pointer">
                <img src=" https://source.unsplash.com/random/person"
                className="w-40 h-28 rounded-l-lg"
                />
                <p className="text-wrap text-slate-700 tracking-wide p-4">Get 10 free images from adobe stock.start now</p>

                <p className="p-0.5 md:p-2 rounded-tl-lg bottom-0 right-0 absolute text-xs bg-gradient-to-br from-blue-300 via-purple-200 to-green-100 ">Ad via carbon</p>


            </a>
            </div>
            <div className="md:flex md:items-center  p-3 capitalize my-2 border border-r-2 rounded-lg">
                <p>trusted by leading companies who
                <Link to="/landing" className="text-purple-700 cursor-pointer underline m-1"> hire on remotive.</Link>
                </p>
                <div className="flex flex-grow md:mx-6 items-center justify-between mt-1">
                <IconContext.Provider value={{}}>
                <FaShopify className="text-slate-800 size-10"  />
                <FaStripe className="text-slate-800 size-14" />
                <SiYoutubetv className="text-slate-800 size-16"  />
                <FaGithub className="text-slate-800 size-10"  />
                </IconContext.Provider>

                </div>
            </div>
            

        </>
    )
}