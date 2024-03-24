import { IconContext } from "react-icons";
import Jobs from "./jobs";
import { FaFaceAngry } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { FaFaceGrin } from "react-icons/fa6";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import JobLayout from "./JobLayout";

export default function RightSide() {
  return (
    <>
      <div className="flex ">
        <div className="fixed bottom-3 left-4 z-10">
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
              {/* <div className=" pb-3 text-yellow-500 flex justify-around">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <button className="hover:text-yellow-400">
                    <FaFaceAngry />
                  </button>
                  <button className="hover:text-yellow-400">
                    <FaFaceFrown />
                  </button>
                  <button className="hover:text-yellow-400">
                    <FaFaceGrin />
                  </button>
                  <button className="hover:text-yellow-400">
                    <FaFaceGrinHearts />
                  </button>
                </IconContext.Provider>
              </div> */}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
