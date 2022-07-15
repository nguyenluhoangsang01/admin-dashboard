import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HeaderFooterPage = ({ category, title, children }) => {
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category={category} title={title} />

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default HeaderFooterPage;
