import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { decrement, increment } from "../cart";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "./Button";

const Cart = () => {
  const { theme, setIsClicked } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen dark:text-gray-200 dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">Shopping Cart</p>

          <button
            type="button"
            onClick={(prevIsClicked) =>
              setIsClicked({
                ...prevIsClicked,
                cart: false,
              })
            }
            style={{ color: theme.currentColor }}
            className="relative text-2xl rounded-full p-3 hover:bg-light-gray ml-5"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {cartData.map((item) => (
          <div
            className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg h-80 w-24"
            />
            <div>
              <p className="font-semibold capitalize">{item.name}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold capitalize">
                {item.category}
              </p>
              <div className="flex gap-4 mt-2 items-center">
                <p className="font-semibold text-lg">{item.price}</p>
                <div className="flex items-center border-1 border-color rounded">
                  <div
                    className="p-2 dark:border-gray-600 border-color text-red-600 cursor-pointer"
                    onClick={() => decrement(item.id)}
                  >
                    <AiOutlineMinus />
                  </div>
                  <p
                    className="p-2 border-t-0 border-b-0 border-1 border-color dark:border-gray-600 text-green-600"
                    id={`quantity-${item.id}`}
                  >
                    {item.quantity}
                  </p>
                  <div
                    className="p-2 border-color dark:border-gray-600 text-green-600 cursor-pointer"
                    onClick={() => increment(item.id)}
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <Button
            color="white"
            bgColor={theme.currentColor}
            text="Place Order"
            borderRadius="10px"
            width
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
