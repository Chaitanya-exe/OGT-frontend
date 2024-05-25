import React, { useContext } from "react";
import { GlobalContext } from "../Context";


const AboutCompany = () => {
  const {project,setProject, comapanyDetail,setCompanyDetail, setLogoImg } =
  useContext(GlobalContext);
  // console.log(project)
  return (
    <>
      <form className="text-sm pt-5 m-8 *:my-3 text-slate-900">
        <div className="*:my-1">
          <h1 className="text-xl pb-4 font-bold font-rio">
            Tell us about
            <span className="text-blue-600"> User</span>
          </h1>
          <h2 className=" font-semibold ">UserName*</h2>
          <input
            value={project.postedBy}
            onChange={(e)=>
            { const {name,value} = e.target
              setProject({...project,[name]: e.target.value})}}
            id="postedBy"
            name="postedBy"
            type="text"
            required
            autoComplete="off"
            placeholder=""
            className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
          />
        </div>
        {/* <div className=" *:my-1">
          <h2 className=" font-semibold">Company website</h2>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
            placeholder=""
            className="w-full border   p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
          />
          <p className=" italic text-sm font-thin tracking-wide">
            Optional: Link to your public company website. This will be used in
            your company profile.
          </p>
        </div> */}

        {/* <div className=" *:my-1">
          <h2 className=" font-semibold text-sm">Company Logo</h2>
          <input
            onChange={(e) => setLogoImg(e.target.files[0])}
            id="email"
            name="email"
            type="file"
            autoComplete="off"
            required
            placeholder=""
            className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
          />
          <p className=" italic text-sm font-thin tracking-wide">
            PNG or JPG only, recommended size 400x400px
          </p>
        </div> */}
        {/* <div className=" *:my-1">
          <h2 className=" font-semibold text-sm">
            Tell us more about your company
          </h2>
          <p className=" italic text-sm font-thin tracking-wide">
            Optional: This will be used in your company profile as full company
            description{" "}
          </p>

          <textarea
          value={comapanyDetail}
          onChange={(e) => setCompanyDetail(e.target.value)}
            className="w-full shadow focus:outline-none capitalize p-2"
            name="message"
            rows="4"
            cols="50"
            placeholder="Company description goes here...."
          ></textarea>
        </div> */}
      </form>
    </>
  );
};

export default AboutCompany;
