import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const Sender = () => {
  const { messages,setMessages} =
    useContext(GlobalContext);
    // const messageClass= messages.sender ? "message-sender" : "message-receiver"

    const handleContextMenu = (event) => {
      event.preventDefault()
      setMessages(messages.filter(message => message.id !== idx))

    }
  return (
    <div className=" overflow-y-auto space-y-2">
      <div className="mx-auto my-1 text-xs tracking-wide py-0.5 px-1 rounded mix-blend-multiply bg-black/45 text-slate-100 w-fit">
        Today
      </div>
      {/* <div className="grid grid-cols-2 "> */}

<div className="w-full flex justify-start items-center">

      <div className="sender overflow-hidden text-ellipsis max-h-32 bg-purple-200  relative max-w-48 min-w-28 px-2 py-1 rounded-r-lg rounded-bl-lg">
        <p>hi baby !</p>
        <p className=" text-xs absolute bottom-0 right-2">7:00</p>
      </div>
      {/* <div className="sender overflow-hidden text-ellipsis max-h-32 bg-purple-200  relative max-w-48 min-w-28 px-2 py-1 rounded-r-lg rounded-bl-lg">
        <p>hi baby !</p>
        <p className=" text-xs absolute bottom-0 right-2">7:00</p>
      </div> */}
</div>


      {messages.map((message, idx)=>(
<div className="space-y-2 flex w-full justify-end">
      <div onContextMenu={handleContextMenu} key={idx} 
      className="receiver text-ellipsis max-h32 bg-purple-200  max-w-80 min-w-40 px-2 py-1 rounded-l-lg rounded-br-lg">
        <p>{message.text}</p>
        <p className=" text-xs bg-whit w-fit float-end p-0.5">
        {message.time}</p>
      </div>
        
      </div>
      ))}
</div>

    // </div>
  );
};

export default Sender;
