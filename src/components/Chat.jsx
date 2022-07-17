import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";

const Chat = () => {
  const { theme, setIsClicked } = useStateContext();

  return (
    <div className="p-8 nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-xl dark:text-gray-200">Messages</p>
          <Button color="white" text="5 news" size="sm" />
        </div>
        <button
          type="button"
          onClick={(prevIsClicked) =>
            setIsClicked({
              ...prevIsClicked,
              chat: false,
            })
          }
          style={{ color: theme.currentColor }}
          className="relative text-2xl rounded-full p-3 hover:bg-light-gray ml-5"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 ">
        {chatData.map((item) => (
          <div
            key={item.message}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.message}
                className="rounded-full h-10 w-10"
              />
              <span className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"></span>
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={theme.currentColor}
          text="See all messages"
          borderRadius="10px"
          width
        />
      </div>
    </div>
  );
};

export default Chat;
