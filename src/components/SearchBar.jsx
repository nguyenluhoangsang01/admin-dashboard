import React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const SearchBar = () => {
  const { theme, setSearchBar } = useStateContext();

  return (
    <div className="bg-half-transparent dark:bg-secondary-dark-bg h-screen fixed nav-item top-0 left-0 right-0">
      <div className="p-5 top-0 left-0 right-0 bg-white flex">
        <TextBoxComponent placeholder="Search" floatLabelType="Auto" />

        <button
          type="button"
          onClick={() => setSearchBar(false)}
          style={{ color: theme.currentColor }}
          className="relative text-2xl rounded-full p-3 hover:bg-light-gray ml-5"
        >
          <MdOutlineCancel />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
