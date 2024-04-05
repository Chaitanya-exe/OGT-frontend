import React, { useContext,useEffect } from "react";
import Sender from "./Sender";
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from "../../Context";
import Type from "./Type";
import { getMessagesFromStorage } from "./ChatStorage";
const ChatBox = () => {
  const { openChat, setOpenChat ,setMessages } = useContext(GlobalContext);


  return (
    <>
    {/* <div className="w-screen h-screen flex items-center -z-10 justify-center fixed top-1 left-0 bg-black/"> */}
      <div className="bg-white max-h-screen shadow rounded-md min-w-[40rem] *:p-2 absolute right-full min-h-96 -top-60 overflow-hidden bottom-3">
        <div className="flex z-10 bg-white sticky top-0 border-b-2 items-center justify-between ">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-12 h-12 border flex justify-center items-center rounded-full overflow-hidden">
              <img className="" src="" alt="hi" />
            </div>
            <p className="text-lg">Name</p>
          </div>
          <div className="flex space-x-3">
            <RxCross2
              onClick={() => setOpenChat(false)}
              className="hover:scale-90 size-5"
            />
          </div>
        </div>
        <div className=" h-[31rem] overflow-y-auto">
        <Sender />

        </div>
        <Type />


      </div>
    {/* </div> */}
    </>
  );
};

export default ChatBox;
