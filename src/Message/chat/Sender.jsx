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
    <div className=" overflow-y-auto space-y-2 relative ">
      <div className="mx-auto my-1 text-xs tracking-wide py-0.5 px-1 rounded mix-blend-multiply bg-black/45 text-slate-100 w-fit">
        Today
      </div>
      <div className="gri grid-cols-2 inline-grid">

<div>

      <div className="sender overflow-hidden text-ellipsis max-h-32 bg-purple-200  relative max-w-48 min-w-28 px-2 py-1 rounded-r-lg rounded-bl-lg">
        <p>hi baby !</p>
        <p className=" text-xs absolute bottom-0 right-2">7:00</p>
      </div>
      <div className="sender overflow-hidden text-ellipsis max-h-32 bg-purple-200  relative max-w-48 min-w-28 px-2 py-1 rounded-r-lg rounded-bl-lg">
        <p>hi baby !</p>
        <p className=" text-xs absolute bottom-0 right-2">7:00</p>
      </div>
</div>
<div className="space-y-2">

      {messages.map((message, idx)=>(
      <div onContextMenu={handleContextMenu} key={idx} 
      className="receiver flex-col float-right w-full block text-ellipsis max-h32 bg-purple-200  max-w-48 min-w-28 px-2 py-1 rounded-l-lg rounded-br-lg">
        <p>{message.text}</p>
        <p className=" text-xs bg-whit w-fit float-end p-0.5">
        {message.time}</p>
      </div>
        
      ))}
</div>
      </div>

    </div>
  );
};

export default Sender;
