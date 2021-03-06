import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HeaderFooterPage = ({ category, title, subtitle, children }) => {
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
        <Header category={category} title={title} subtitle={subtitle} />

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default HeaderFooterPage;
