import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

const JobLi = [
  "Software Development",
  "Web Development",
  "Design",
  "Network Engineer",
  "Database Administrator",
  "Systems Administrator",
  "Data Scientist",
  "Security Analyst",
  "UX/UI Designer",
  "Cloud Engineer",
  "Blockchain Developer",
  "Cybersecurity Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Project Manager",
  "Technical Support Engineer",
  "Business Analyst",
  "IT Manager",
];
const GlobalState = ({ children }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [hasDialogBeenShown, setHasDialogBeenShown] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [ComapanyName, setCompanyName] = useState("");


  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleLoginButtonClick = () => {
    setIsLoginFormOpen(true);
  };
  const handleSignUpButtonClick = () => {
    setSignUp(true);
    // hasDialogBeenShown(false)
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
        ComapanyName,handleCompanyChange,handleSignUpButtonClick,
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
        isMenu,
        setIsMenu,
        isScrolled,
        setIsScrolled,
        isLoginFormOpen,
        setIsLoginFormOpen,
        toggleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
