import React, { useState } from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";



const List1 =["Listed on remotive.com","Shared in daily email update","LinkedIn + Twitter shares","Shared on Google job network"]
const List_1=["Highlight your add","Display company logo","Pin ad 7 days on top of main page"]
const List2=[...List1,"Highlight your add","Display company logo"]
const List_2=["Pin ad 7 days on top of main page"]
const List3= [...List1,...List_1]

const PromotionPlan = () => {
    const [selected,setSelected] = useState(2)

    const handleSelected=(index)=>{
        setSelected(index)
    }
 const handleOne=(index2)=>{
    alert("Are you sure you don't want to display your company logo? Job listings without logo get less views.")
    setSelected(index2)
 }
  return (
    <>
    <div className='m-8 pt-5'>

    <div>
    <h1 className='text-2xl capitalize pb-4 font-bold font-rio'>Pick your promotion plan</h1>
    <p className='font-thin '>Get noticed by adding your logo, highlighting your post or pinning it to the top! This helps generating more traffic to your listing.</p>
<p className='text-center bg-gray-300 p-1.5 rounded-md my-6 font-thin text-xs tracking-wide'><IoAlertCircleOutline className='inline-flex ' /> Tap on a plan to view the full details
</p>
    </div>
    <div className='flex justify-between mt-10 space-x-3'>

    <div  className={selected== 1 ? "w-1/3  p-3 border-orange-200 border-2 rounded-md *:font-thin *:text-sm " : "w-1/3  p-3 border-gray-300 border-2 rounded-md *:font-thin *:text-sm "} 
    onClick={() => handleOne(1)}>
        <div className='flex justify-between'>
            <h3 className='font-thin'>Basic</h3>
            <h3 className='font-serif text-slate-900 text-xl '>$ 299/mo</h3>
        </div>
        <div className='m-3'>
        <ul className=' *:my-3'>
        {List1.map((item,index) => (
            <React.Fragment key={index}>
            {index === 3 && <li className=''><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' /><span className='font-semibold'>1</span> Listed on remotive.com</li>
            }
            <li key={index}><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' />
            {item}</li>

            </React.Fragment>
        )

        )}
        </ul>
        <ul className='mx-7 *:line-through *:my-3 *:text-slate-500 '>

        {List_1.map((item,index) => (

<li key={index}>{item}</li>
        ))}
        </ul>
      {selected == 1?<button className='w-full hover:bg-transparent hover:border-orange-500 hover:border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg bg-orange-200'> <FaCircleCheck className='size-4 inline-flex mr-3 ' /> Selected</button>:<button className='w-full bg-transparent hover:border-none border-orange-950 border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg hover:bg-orange-200'>Select this plan</button>}
        </div>

    </div> 


    <div  className={selected== 2 ? "w-1/3 relative p-3 border-orange-200 border-2 rounded-md *:font-thin *:text-sm " : "w-1/3 relative p-3 border-gray-300 border-2 rounded-md *:font-thin *:text-sm "} onClick={() => handleSelected(2)}>

        <div className='flex justify-between'>
         <h2 className='absolute -top-4 text-orange-950 font-normal bg-orange-200 px-3 py-1 rounded-full text-xs left-1/3'>Most Popular</h2>
            <h3 className='font-thin'>Plus</h3>
            <h3 className='font-serif text-slate-900 text-xl '>$ 398/mo</h3>
        </div>
        <div className='m-3'>
        <ul className=' *:my-3'>
        {List2.map((item,index) => (
            <React.Fragment key={index}>
            {index === 4 && <li className=''><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' /><span className='font-semibold'>2</span> Listed on remotive.com</li>
            }
            <li key={index}><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' />
            {item}</li>

            </React.Fragment>
        
        )  )}
           
        </ul>
        <ul className='mx-7 *:line-through *:my-3 *:text-slate-500 '>

        {List_2.map((item,index) => (

<li key={index}>{item}</li>
        ))}
        </ul>

        </div>
        {selected == 2?<button className='w-full hover:bg-transparent hover:border-orange-500 hover:border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg bg-orange-200'> <FaCircleCheck className='size-4 inline-flex mr-3 ' /> Selected</button>:<button className='w-full bg-transparent hover:border-none border-orange-950 border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg hover:bg-orange-200'>Select this plan</button>}

  </div>   

  <div  className={selected== 3 ? "w-1/3  p-3 border-orange-200 border-2 rounded-md *:font-thin *:text-sm " : "w-1/3  p-3 border-gray-300 border-2 rounded-md *:font-thin *:text-sm "} onClick={() => handleSelected(3)}>

        <div className='flex justify-between'>
            <h3 className='font-thin'>Premium</h3>
            <h3 className='font-serif text-slate-900 text-xl '>$ 448/mo</h3>
        </div>
        <div className='m-3'>
        <ul className=' *:my-3'>
        {List3.map((item,index) => (
            <React.Fragment key={index}>

            {index === 4 && <li className=''><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' /><span className='font-semibold'>3</span> Listed on remotive.com</li>
            }

            <li key={index}><FaCircleCheck className='size-4 inline-flex mr-3 text-orange-500' />
            {item}</li>
            </React.Fragment>
        )

        )}

        </ul>
        {selected == 3?<button className='w-full hover:bg-transparent  hover:border-orange-500 hover:border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg bg-orange-200'> <FaCircleCheck className='size-4 inline-flex mr-3 ' /> Selected</button>:<button className='w-full bg-transparent hover:border-none border-orange-950 border transition-all text-center font-semibold text-orange-950 p-2 rounded-lg hover:bg-orange-200'>Select this plan</button>}

        </div>

    </div>
    </div>
    <div className='text-gray-500 font-thin my-8'>
    <LiaCertificateSolid className='inline-flex align-middle mr-2 size-6' />We guarantee you 200+ “Apply” clicks, or we’ll repost it for another month, free of charge.
  
    </div>
    </div>

      
    </>
  )
}

export default PromotionPlan
