import React, { useContext,useEffect } from "react";
import Sender from "./Sender";
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from "../../Context";
import Type from "./Type";
const ChatBox = () => {
  const { setOpenChat ,setMessages,messages } = useContext(GlobalContext);


  return (
    <>
      <div className="bg-white mx-8 max-h-screen shadow rounded-md min-w-[40rem] *:p-2 absolute right-full min-h-96 -top-60 overflow-hidden bottom-3">
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
    </>
  );
};

export default ChatBox;
