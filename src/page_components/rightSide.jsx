import { IconContext } from "react-icons";
import Jobs from "./jobs"
import { FaFaceAngry } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { FaFaceGrin } from "react-icons/fa6";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";


const jobOffers=[
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/flower",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"Worldwide",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/person",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"USA",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/shit",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"Germany ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/house",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/appartment",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/company",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/building",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    }, {
        id: 1,
        imgPath:"https://source.unsplash.com/random/scripture",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/pillar",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 1,
        imgPath:"https://source.unsplash.com/random/heart",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"

    },
    {
        id: 2,
        imgPath:"https://source.unsplash.com/random/profile",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
    {
        id: 3,
        imgPath:"https://source.unsplash.com/random/avatar",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
    {
        id: 4,
        imgPath:"https://source.unsplash.com/random/man",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
    {
        id: 5,
        imgPath:"https://source.unsplash.com/random/woman",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
    {
        id: 6,
        imgPath:"https://source.unsplash.com/random/boy",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
    {
        id: 7,
        imgPath:"https://source.unsplash.com/random/google",
        title:"customer service rep us",
        company:"omni interactions",
        stream:"customer service",
        salary:"$14-$20/hour",
        country:"us ",
        timeOfPost:"2wk ago"


    },
]


export default function RightSide(){


    return(
        <>
<div className="flex ">

<div className="hidden lg:block">

    <div className="mt-2 ml-1 sticky top-24  border-blue-900 border-l-2  border-t-4 p-2 rounded-lg bg-indigo-50">
    <iframe className="mx-auto size-48" src="https://lottie.host/embed/82a20b2f-b572-4037-b6b0-28d13e30d6bd/QYnGZBnncX.json"></iframe>

        <h1 className="font-semibold text-lg capitalize font-serif">
        Unlock 26,754 additional remote jobs with Remotive Accelerator
        </h1>
        <p> Accelerator Incl. Advanced search filters and email notifications
        </p>
        <button className="mx-auto block button">Get Access</button>
    </div>
    </div>

    
<div className="fixed bottom-3 left-4">

    <button className="relative ">
        <span className="hover:shadow-black hover:shadow-md inline-block h-9 w-10 bg-red-400 rounded-md">
            <span className="inline-block h-1 absolute left-2 top-3 rounded-full w-1 bg-black"></span>
            <span className="inline-block h-2 absolute -left-2 w-3 rounded-bl-full  bg-red-400"></span>

            <span className="inline-block h-1 absolute right-2 top-3 rounded-full w-1 bg-black"></span>
            <span className="inline-block h-2 absolute left-3 bottom-3 rounded-b-full w-4 bg-black"></span>


        </span>
        <div className="absolute hidden -top-40 w-60 bg-slate-900 p-2">
        <div className="flex items-start text-white pb-3">
        <h1 className="">How would you rate your experience?</h1>
        <GiCancel />

        </div>
        <div className=" pb-3 text-yellow-500 flex justify-around">
        <IconContext.Provider  value={{size:"2rem"}} >
            <button className="hover:text-yellow-400"><FaFaceAngry /></button>
            <button  className="hover:text-yellow-400"><FaFaceFrown /></button>
            <button  className="hover:text-yellow-400"><FaFaceGrin /></button>
            <button  className="hover:text-yellow-400"><FaFaceGrinHearts /></button>

        </IconContext.Provider>



            
        </div>


        </div>
    </button>
</div>
    {/* <div class="border-t-8 border-r-8 h-0 w-0"></div> */}

<Jobs data={jobOffers}/>
</div>

        </>
    )
}