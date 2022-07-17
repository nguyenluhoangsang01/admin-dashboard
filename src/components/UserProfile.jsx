import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";
import avatar from "../data/avatar.jpg";
import { userProfileData } from "../data/dummy";

const UserProfile = () => {
  const { theme, setIsClicked } = useStateContext();

  return (
    <div className="p-8 nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-xl dark:text-gray-200">
            User Profile
          </p>
        </div>
        <button
          type="button"
          onClick={(prevIsClicked) =>
            setIsClicked({
              ...prevIsClicked,
              userProfile: false,
            })
          }
          style={{ color: theme.currentColor }}
          className="relative text-2xl rounded-full p-3 hover:bg-light-gray ml-5"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          src={avatar}
          alt="avatar user profile"
          className="rounded-full h-24 w-24"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Michael Roberts
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrator
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            info@shop.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <Button
              color={item.iconColor}
              bgColor={item.iconBg}
              size="xl"
              text={item.icon}
              borderRadius="8px"
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button
          color="white"
          bgColor={theme.currentColor}
          text="Logout"
          borderRadius="10px"
          width
        />
      </div>
    </div>
  );
};

export default UserProfile;
