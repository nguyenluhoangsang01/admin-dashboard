import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft, BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    theme,
    searchBar,
    setSearchBar,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div className="flex">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={theme.currentColor}
          icon={<AiOutlineMenu />}
        />
        <NavButton
          title="Search"
          customFunc={() => setSearchBar((prevSearchBar) => !prevSearchBar)}
          color={theme.currentColor}
          icon={<BsSearch />}
        />
      </div>

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={theme.currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick("chat")}
          color={theme.currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => handleClick("notification")}
          color={theme.currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="w-8 h-8 rounded-full" alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span
                className="font-bold ml-1 text-14"
                style={{ color: theme.currentColor }}
              >
                Username
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>

      {searchBar && <SearchBar />}
    </div>
  );
};

export default Navbar;
