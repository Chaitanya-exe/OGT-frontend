import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../Context";

const Sender = () => {
  const { messages, setMessages } = useContext(GlobalContext);

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderMessByDate = () => {
    const groupedMess = {};

    messages.forEach((message) => {
      const dateKey = message.date;

      if (!groupedMess[dateKey]) {
        groupedMess[dateKey] = [];
      }
      groupedMess[dateKey].push(message);
    });
    return (
      <div className=" flex-col w-full space-y-2">
    { Object.entries(groupedMess).map(([date]) => (
          <React.Fragment key={date}>
        <h2 className="text-center text-sm bg-black/55 w-fit mx-auto rounded-md text-white px-3 py-0.5">{date}</h2>
        {groupedMess[date].map((message, index) => (
            <div className="space-y-4 self-end">
              <div key={date} className="space-y-5">
                <div className="flex items-center justify-end ">
                  <div
                    key={index}
                    ref={messageEndRef}
                    className={` text-ellipsis max-h32 bg-purple-200  max-w-60 min-w-fi text-wrap pl-4 pr-2 py-1 ${index === 0 ? "first:rounded-l-full first:rounded-tr-full" : "rounded-r-md"} ${index === messages.lenth -1 ? "last:rounded-l-xl last:rounded-br-full" : "rouded-r-md"} rounded-l-3xl rounded-r-md " `}
                  >
                    <div>{message.text}</div>
                    <h2 className=" text-xs bg-whit w-fit float-end p-0.5">
                      {message.time}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
        ))}
          </React.Fragment>
    ) ) }
      </div>
    )

  };
  return <div className=" overflow-y-auto space-y-2">{renderMessByDate()}</div>;
};

export default Sender;
