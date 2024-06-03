import React, { useContext,useState,useEffect } from "react";
import { GlobalContext } from "../Context";

const AboutJob = () => {
  const { JobLi, project, setProject } = useContext(GlobalContext);

  const [conuntryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        countryNames.sort((a, b) => a.localeCompare(b));
        setCountryList(countryNames);
      })
      .catch((error) => {
        console.error("Error fetching country names:", error);
      });
  });
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

const handleChange = (e) => {
  const { name, value } = e.target;
  setProject(prevProject => ({
    ...prevProject,
    [name]: value
  }));
}

  return (
    <>
        <form className="text-sm mx-auto w-[56vw] *:my-5 text-slate-900">
          <div className=" *:my-1">
            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Project Title</label>
            <input
              value={project.title}
              onChange={handleChange}
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
            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 ">Company</label>
            <input
              value={project.company}
              onChange={handleChange}
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
            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Catergory</label>
            <select
              value={project.category}
              onChange={handleChange}
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
          <div className=" *:my-1">
            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Country</label>
            <select
              value={project.country}
              onChange={handleChange}
              name="country"
              className="w-full bg-white border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            >
              {conuntryList.map((country,index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="*:my-1">
            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Salary (in $)</label>
            <input
              value={project.price}
              placeholder="15 $ on completion"
              onChange={handleChange}
              id="price"
              name="price"
              type="number"
              min={3}
              autoComplete="off"
              required
              className="w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
            /></div>
            <div className=" *:my-1">

            <label className=" font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Delivery Time</label>
            <input
              value={project.DeliveryTime}
              onChange={handleChange}
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
            <h2 className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Project Description</h2>
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
              onChange={handleChange}
              className="w-full p-2 shadow focus:outline-none"
              name="desc"
              rows="15"
              cols="50"
              placeholder="Enter your message here"
            ></textarea>
          </div>
        </form>
    </>
  );
};

export default AboutJob;
