import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "../components/Button";
import SparkLine from "../components/Charts/SparkLine";
import StackedChart from "../components/Charts/StackedChart";
import Footer from "../components/Footer";
import { useStateContext } from "../contexts/ContextProvider";
import { earningData, SparklineAreaData } from "../data/dummy";

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

      {/* Revenue Updates*/}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            {/* Legend */}
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
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
                  color={theme.currentColor}
                  currentColor={theme.currentColor}
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

            <div className="">
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ecommerce;
