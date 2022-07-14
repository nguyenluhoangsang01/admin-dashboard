import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const yearStart = 2022;

  return (
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © Copyright
      <span className="mx-1">
        {currentYear > yearStart
          ? yearStart + " - " + currentYear
          : currentYear}
      </span>
      nguyenluhoangsang01.edu.vn. All rights reserved
    </p>
  );
};

export default Footer;
