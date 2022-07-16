import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title, subtitle }) => {
  const { theme } = useStateContext();

  return (
    <div className="mb-10">
      <p className="text-lg text-gray-400 capitalize">{category}</p>
      <p
        className="text-3xl font-extrabold tracking-tight text-slate-900 capitalize"
        style={{
          color: theme.currentColor,
        }}
      >
        {title}
      </p>
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3 capitalize">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
