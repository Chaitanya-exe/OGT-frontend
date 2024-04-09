import React, { useContext, useEffect } from "react";
import { TiAttachment } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { GlobalContext } from "../../Context";
import { saveMessagesToStorage, getMessagesFromStorage } from "./ChatStorage";

const Type = () => {
  const { receiverText, setReceiverText, messages, setMessages } =
    useContext(GlobalContext);

  const handleSendMessage = () => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear() % 100}`;
    let id = 0;
    if (receiverText.trim() !== "") {
      const currentTime = currentDate.toLocaleTimeString([], options);
      id++;
      const newMessage = {
        text: receiverText,
        sender: true,
        time: currentTime,
        date: formattedDate,
        id: id,
      };
      setMessages([...messages, newMessage]);
      saveMessagesToStorage(messages);
      setReceiverText("");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };
  useEffect(() => {
    const storedMessages = getMessagesFromStorage();
    setMessages(storedMessages);
  }, []);

  return (
    <>
      <div className="sticky text-slate-800 bg-sky-200 rounded-full bottom-1 mx-1 flex items-center">
        <TiAttachment className="inline-flex size-6" />
        <input
          type="text"
          autoComplete="off"
          value={receiverText}
          onChange={(e) => {
            setReceiverText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          name="message"
          placeholder="type a message..."
          className="bg-sky-200 px-2 outline-none py-1.5 w-full"
        />
        <button onClick={handleSendMessage}>
          <RiSendPlaneFill
            onClick={handleSendMessage}
            className="-ml-7 size-5"
          />
        </button>
      </div>
    </>
  );
};

export default Type;
