import React, { useContext } from 'react'
import { GlobalContext } from '../Context'

const Main = () => {
    const {JobLi} = useContext(GlobalContext)
  return (
    <div className="flex mt-20 mb-10 py-8 text-wrap flex-col ">
          <div className="text-center my-14 md:mx-16 mx-2">
            <h1 className="font-bold font-riot text-4xl">
              Find your dream remote job without the hassle
            </h1>
            <p className="text-center mt-2">
              OGT is where top talents go to easily access active and fully
              remote job opportunities from vetted tech companies.
            </p>
            <p>
              Unlock 26,736 additional remote jobs with{" "}
              <a className="underline">OGT Accelerator</a>
            </p>
          </div>
          <div className="mt-4 mb-11 sm:mx-4 md:ml-40 md:mr-10 lg:mr-72 lg:ml-96">
            <ul className="*:rounded-full *:border *:bg-sky-100 *:border-slate-600  *:capitalize *:text-slate-900 *:m-1 *:px-2 *:py-0.5 *:inline-block">
              {JobLi.map((job) => (
                <li className="bg-blue-200">{job}</li>
              ))}
            </ul>
          </div>
        </div>
  )
}

export default Main
