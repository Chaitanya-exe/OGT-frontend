import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const Sender = () => {
  const { messages, setMessages } =
    useContext(GlobalContext);
    // const messageClass= sender ? "message-sender" : "message-receiver"

  return (
    <div className="min-h-full h-96 space-y-2 ">
      <div className="mx-auto my-1 text-xs tracking-wide py-0.5 px-1 rounded mix-blend-multiply bg-black/45 text-slate-100 w-fit">
        Today
      </div>

      <div className="sender overflow-hidden text-ellipsis max-h-32 bg-purple-200  relative max-w-48 min-w-28 px-2 py-1 rounded-r-lg rounded-bl-lg">
        <p>hi baby !</p>
        <p className=" text-xs absolute bottom-0 right-2">7:00</p>
      </div>

      {messages.map((message, idx)=>(
      <div className="receiver overflow-hidden text-ellipsis max-h-32 bg-purple-200 float-right  relative max-w-48 min-w-28 px-2 py-1 rounded-l-lg rounded-br-lg">
        <p>{text}</p>
        <p className=" text-xs absolute bottom-0 right-2">{time}</p>
      </div>
        
      ))}

    </div>
  );
};

export default Sender;
