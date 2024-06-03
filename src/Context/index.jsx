import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

// interface Project {
//   title: string;
//   company: string;
//   desc: string;
//   price: number;
//   category: string;
//   postedBy: string;
//   DeliveryTime: string;
//   isCompleted: boolean;
//   id: string;
// }

const JobLi = [
  "Software Development",
  "Web Development",
  "Design",
  "Networking",
  "Database",
  "Systems Design",
  "Data Science",
  "Security Analyst",
  "UX/UI Designer",
  "Cloud",
  "Blockchain",
  "Cybersecurity",
  "Machine Learning",
  "AI",
  "Frontend",
  "React",
  "Node.js",
  "React-Redux",
  "App Development",
  "Full-Stack",
];
const data = [
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/flower",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "Worldwide",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/person",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "USA",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/shit",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "Germany ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/house",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/appartment",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/company",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/building",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/scripture",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/pillar",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/heart",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 2,
    imgPath: "https://source.unsplash.com/random/profile",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 3,
    imgPath: "https://source.unsplash.com/random/avatar",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 4,
    imgPath: "https://source.unsplash.com/random/man",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 5,
    imgPath: "https://source.unsplash.com/random/woman",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 6,
    imgPath: "https://source.unsplash.com/random/boy",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 7,
    imgPath: "https://source.unsplash.com/random/google",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
];

const GlobalState = ({ children }) => {
  const [signUp, setSignUp] = useState(false);
  const [hasDialogBeenShown, setHasDialogBeenShown] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [ComapanyName, setCompanyName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [price, setPrice] = useState();
  const [Jobdesciption, setJobDescription] = useState("");
  const [token, setToken] = useState("");

  


  const [project, setProject] = useState({
    title: "",
    company:"",
    desc: "",
    price: 8,
    category: "",
    postedBy: "",
    country:"India",
    DeliveryTime: "",
    isCompleted: false,
    id:""
  });

  const [logoImg, setLogoImg] = useState(null);
  const [comapanyDetail, setCompanyDetail] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  let [activeTab, setActiveTab] = useState(2);
  const [choosenAmount, setChoosenAmount] = useState("");
  const [isCafEmpty, setISCafEmpty] = useState(true);

  const [StepCount, setStepCount] = useState(1);

  const [openChat, setOpenChat] = useState(false);
  const [receiverText, setReceiverText] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    age: 18,
    email: "",
    password: "",
    country: "",
    desc: "",
    phNumber: "",
    isEmployer: false,
  });

  const [termsChecked, setTermsChecked] = useState(false);
  const [age, setAge] = useState(18);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginFormOpen(true);
  };
  const handleSignUpButtonClick = () => {
    setSignUp(true);
  };

  const handleCancel = () => {
    setIsLoginFormOpen(false);
  };

  const handleClick = (index) => {
    if (index == Location.length - 1) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{
        project,
        setProject,
        user,
        setUser,
        token,
        setToken,
        
        error,
        setError,
        isUserLoggedIn,
        setIsUserLoggedIn,

        termsChecked,
        setTermsChecked,

        isFormValid,
        setIsFormValid,

        logoImg,
        setLogoImg,
        comapanyDetail,
        setCompanyDetail,
        openChat,
        setOpenChat,
        activeTab,
        setActiveTab,
        choosenAmount,
        setChoosenAmount,
        isCafEmpty,
        setISCafEmpty,
        StepCount,
        setStepCount,
        receiverText,
        setReceiverText,
        messages,
        setMessages,
       
        data,
        ComapanyName,
        handleCompanyChange,
        handleSignUpButtonClick,
        handleClick,
        handleChange,
        showOptions,
        selectedOption,
        setSelectedOption,
        jobTitle,
        setJobTitle,
        setShowInput,
        showInput,
        setShowOptions,
        JobLi,
        signUp,
        setSignUp,
        hasDialogBeenShown,
        setHasDialogBeenShown,
        handleLoginButtonClick,
        handleCancel,
        isLoginFormOpen,
        setIsLoginFormOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
