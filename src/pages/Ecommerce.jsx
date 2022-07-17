import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React from "react";
import { BsCurrencyDollar, BsThreeDots } from "react-icons/bs";
import Button from "../components/Button";
import LineChart from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";
import SparkLine from "../components/Charts/SparkLine";
import StackedChart from "../components/Charts/StackedChart";
import Footer from "../components/Footer";
import { useStateContext } from "../contexts/ContextProvider";
import {
  dropdownData,
  earningData,
  ecomPieChartData,
  medicalproBranding,
  recentTransactions,
  SparklineAreaData,
  weeklyStats,
} from "../data/dummy";

const DropDown = (id, currentMode) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id={id}
      fields={{ text: "Time", value: "Id" }}
      style={{
        border: "none",
        color: currentMode === "Dark" && "white",
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { theme } = useStateContext();

  return (
    <div className="mt-24">
      {/* Earnings */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8  pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <div
              className="p-4 opacity-0.9 rounded-full text-2xl text-white hover:drop-shadow-xl"
              style={{ backgroundColor: theme.currentColor }}
            >
              <BsCurrencyDollar />
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={theme.currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => {
            const getPercent = item.percentage.replaceAll("%", "");

            return (
              <div
                key={item.title}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              >
                <button
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span
                    className={`text-sm ml-2`}
                    style={{
                      color: getPercent < 0 ? "#dc2626" : "#16a34a",
                    }}
                  >
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        {/* Revenue Updates*/}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
          </div>

          <div className="mt-10 flex gap-10 flex-gap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              {/* Budget */}
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white ml-3 text-xs"
                    style={{ backgroundColor: theme.currentColor }}
                  >
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              {/* Expense */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              {/* SparkLine */}
              <div className="mt-5">
                <SparkLine
                  id="line-sparkline"
                  type="Line"
                  width="250px"
                  height="80px"
                  data={SparklineAreaData}
                />
              </div>
              {/* Download Report Button */}
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={theme.currentColor}
                  text="download report"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>

            <div>
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: theme.currentColor }}
          >
            <div className="flex items-center justify-between">
              <p className="text-white text-2xl font-semibold">Earnings</p>
              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>
            <div className="mt-4">
              {/* SparkLine ECommerce */}
              <SparkLine
                id="line-sparkline-earnings"
                type="Column"
                color="rgb(242, 252, 253)"
                currentColor={theme.currentColor}
                width="370px"
                height="80px"
                data={SparklineAreaData}
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>
            <div>
              <div className="w-40">
                <PieChart
                  id="pie-chart-ecommerce"
                  legendSettings={{
                    visible: false,
                  }}
                  data={ecomPieChartData}
                  width="160px"
                  height="160px"
                  name="Sale"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 m-4 flex-wrap justify-center flex-col items-center">
          {/* Recent Transactions */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <DropDown />
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item, index) => {
                const signRecentTransactions = item.amount.substring(0, 1);

                return (
                  <div className="flex justify-between mt-4" key={index}>
                    <div className="flex gap-4">
                      <Button
                        color={item.iconColor}
                        bgColor={item.iconBg}
                        text={item.icon}
                        borderRadius="8px"
                        size="2xl"
                      />
                      <div>
                        <p className="text-md font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <p
                      className={`text-${
                        signRecentTransactions === "+" ? "green" : "red"
                      }-600`}
                    >
                      {item.amount}
                    </p>
                  </div>
                );
              })}
            </div>{" "}
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={theme.currentColor}
                  text="Add"
                  borderRadius="10px"
                  size="md"
                />
              </div>
              <div className="text-gray-400 text-sm">
                36 Recent Transactions
              </div>
            </div>
          </div>

          {/* Sales Overview */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Sales Overview</p>
              <DropDown
                id="sales-overview-id"
                currentMode={theme.currentMode}
              />
            </div>
            <LineChart />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Weekly Stats */}
          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Weekly Stats</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500"
              >
                <BsThreeDots />
              </button>
            </div>

            <div className="mt-10">
              {weeklyStats.map((item, index) => {
                const sign = item.amount.substring(0, 1);

                return (
                  <div key={index} className="flex justify-between mt-4 w-full">
                    <div className="flex gap-4">
                      <Button
                        color="white"
                        bgColor={item.iconBg}
                        text={item.icon}
                        borderRadius="50%"
                        size="2xl"
                      />
                      <div>
                        <p className="text-md font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <p className={`text-${sign === "+" ? "green" : "red"}-600`}>
                      {item.amount}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <SparkLine
                id="line-sparkline-1"
                type="Line"
                width="355px"
                height="160px"
                data={SparklineAreaData}
              />
            </div>
          </div>

          {/* MedicalPro Branding medicalproBranding*/}
          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">MedicalPro Branding</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500"
              >
                <BsThreeDots />
              </button>
            </div>
            <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
              16 APR, 2021
            </p>
            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.data.map((item, index) => (
                <div className="border-r-1 border-color pr-4 pb-2" key={index}>
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color pb-4 mt-2">
              <p className="text-md font-semibold mb-2">Teams</p>
              <div className="flex gap-4">
                {medicalproBranding.teams.map((item, index) => (
                  <p
                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                    style={{ backgroundColor: item.color }}
                    key={index}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-md font-semibold mb-2">Leaders</p>
              <div className="flex gap-4">
                {medicalproBranding.leaders.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`avatar-${index}`}
                    className="rounded-full w-8 h-8"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={theme.currentColor}
                  text="Add"
                  borderRadius="10px"
                  size="md"
                />
              </div>
              <div className="text-gray-400 text-sm">
                36 Recent Transactions
              </div>
            </div>
          </div>

          {/* Daily Activities */}
          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Daily Activities</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500"
              >
                <BsThreeDots />
              </button>
            </div>

            <div className="mt-10">
              <img
                src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/blog-bg-2x.f6e9447d.jpg"
                alt="daily-activities-images"
                className="md:w-96 h-50 "
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">React 18 coming soon!</p>
                <p className="text-gray-400 ">By nguyenluhoangsang01</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Button
                    color="white"
                    bgColor={theme.currentColor}
                    text="Read More"
                    borderRadius="10px"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ecommerce;
