import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const AboutJob = () => {
  const { JobLi, project, setProject } = useContext(GlobalContext);
  const Fill=[{
    id:1,
    name:"Project title",
    schema:"title",
    placeholder:"",
    type:"text"
  },
  {
    id:2,
    name:"Username(Posted by)",
    schema:"PostedBy",
    placeholder:"",
    type:"text"
  },
  {
    id:3,
    name:"Company",
    schema:"company",
    placeholder:"",
    type:"text"
  },
  {
    id:4,
    name:"Category",
    schema:"category",
    placeholder:"",
    type:"text"
  },
  {
    id:5,
    name:"Salary(in $)",
    schema:"price",
    placeholder:"",
    type:"number",
    min : 3
  },
  {
    id:6,
    name:"Delivery Time",
    schema:"DeliveryTime",
    placeholder:"",
    type:"text"
  },
  {
    id:7,
    name:"Pr",
    schema:"PostedBy",
    placeholder:"",
    type:"text"
  },

]

  return (
    <>
      <div>
        <form className="text-sm m-8  *:my-3 text-slate-900">
          <div className=" *:my-1">
            <label className=" font-semibold">Project Title*</label>
            <input
              value={project.title}
              onChange={(e) => {
                const { name } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              id="title"
              name="title"
              type="text"
              autoComplete="off"
              required
              placeholder="e.g. Lead developer,Project Manager"
              className="w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            />
          </div>
          <div className="*:my-1">
            <label className=" font-semibold ">Username (Posted by)*</label>
            <input
              value={project.postedBy}
              onChange={(e) => {
                const { name, value } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              id="postedBy"
              name="postedBy"
              type="text"
              required
              autoComplete="off"
              placeholder="Posted by"
              className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            />
          </div>
          <div className="*:my-1">
            <label className=" font-semibold ">Company*</label>
            <input
              value={project.company}
              onChange={(e) => {
                const { name, value } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              id="company"
              name="company"
              type="text"
              required
              autoComplete="off"
              placeholder="Company Name"
              className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            />
          </div>
          <div className=" *:my-1">
            <label className=" font-semibold">Catergory*</label>
            <select
              value={project.category}
              onChange={(e) => {
                const { name } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              name="category"
              className="w-full bg-white border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            >
              {JobLi.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="*:my-1">
            <label className=" font-semibold text-sm">Salary (in $)*</label>
            <input
              value={project.price}
              placeholder="15 $ on completion"
              onChange={(e) => {
                const { name } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              id="price"
              name="price"
              type="number"
              min={3}
              autoComplete="off"
              required
              className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            /></div>
            <div className=" *:my-1">

            <label className=" font-semibold text-sm">Delivery Time*</label>
            <input
              value={project.DeliveryTime}
              onChange={(e) => {
                const { name } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              id="DeliveryTime"
              name="DeliveryTime"
              type="text"
              autoComplete="off"
              required
              placeholder='delivery time for project such as: "2 day or 10 hr"'
              className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            />
           
          </div>
          <div className=" *:my-1">
            <h2 className="font-semibold text-sm">Project Description*</h2>
            <p className=" italic text-sm font-thin tracking-wide">
              Don’t worry if that’s not 100% perfect, you can
              <span className="text-slate-900 font-semibold">
                {" "}
                always edit after posting
              </span>{" "}
              your job!
            </p>
            <p className=" italic text-sm font-thin tracking-wide">
              If your formatted content looks slightly off, don't worry! A
              Remotive team member will manually check it and fix it before
              publishing :){" "}
            </p>
            <textarea
              value={project.desc}
              onChange={(e) => {
                const { name } = e.target;
                setProject({ ...project, [name]: e.target.value });
              }}
              className="w-full p-2 shadow focus:outline-none"
              name="desc"
              rows="15"
              cols="50"
              placeholder="Enter your message here"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutJob;
