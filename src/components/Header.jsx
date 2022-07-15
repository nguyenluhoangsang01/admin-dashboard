import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
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
    </div>
  );
};

export default Header;
