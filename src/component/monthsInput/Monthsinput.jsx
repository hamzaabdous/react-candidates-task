import React, { useEffect } from "react";
import monthsinput from "./monthsinput.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useState from "react-usestateref";

export const Monthsinput = ({
  min_tenure,
  max_tenure,
  setmonth,
  setMonthlyAmount,
  totalAmountRef,
  amountRef,
}) => {
  var [month, setMonth, monthRef] = useState(min_tenure);

  function na9is() {
    if (monthRef.current <= min_tenure) {
      setMonth(min_tenure);
      setmonth(min_tenure);
      setMonthlyAmount(totalAmountRef / monthRef.current);
    } else {
      setMonth(parseInt(monthRef.current) - 1);
      setmonth(monthRef.current);
      setMonthlyAmount(totalAmountRef / monthRef.current);
    }
    console.log(monthRef.current);
  }
  function za2id() {
    if (parseInt(monthRef.current) >= max_tenure) {
      setMonth(max_tenure);
      setmonth(max_tenure);
      setMonthlyAmount(totalAmountRef / monthRef.current);
    } else {
      setMonth(parseInt(monthRef.current) + 1);
      setmonth(monthRef.current);
      setMonthlyAmount(totalAmountRef / monthRef.current);
    }
    console.log(monthRef.current);
  }
  function checkDivesion(month, amount) {
    if (month != 0) {
      setMonthlyAmount(totalAmountRef / monthRef.current);
    }
    if (amount == 0 || month == 0) {
      setMonthlyAmount(0);
    }
  }
  return (
    <>
      <div className="container m-auto">
        <div className="vertical-center">
          <div className="custom-number-input mt-1 h-12 w-50">
            <div className="flex flex-row h-10  border border-blue-Gray-50  w-full rounded-lg relative  ">
              <button
                data-action="decrement"
                className=" bg-white text-gray-600 hover:text-gray-700 hover:bg-white h-full w-20 rounded-l cursor-pointer outline-none"
                onClick={na9is}
              >
                <span className="m-auto text-2xl font-thin">
                  {" "}
                  <BiChevronLeft color="#0003" size={30} />
                </span>
              </button>
              <input
                max={max_tenure}
                min={min_tenure}
                value={monthRef.current}
                onChange={(event) => {
                  setMonth(event.target.value);
                  setmonth(event.target.value);
                  checkDivesion(monthRef.current,amountRef)
                  console.log("setMonthlyAmount", totalAmountRef.current /   monthRef.current);
                }}
                type="number"
                className="outline-none focus:outline-none text-center w-full bg-white font-Work-Sans text-md hover:text-blue-Gray-400 focus:text-blue-Gray-400  md:text-basecursor-default flex items-center text-blue-Gray-400  outline-none"
                name="custom-input-number"
              />
              <button
                onClick={za2id}
                data-action="increment"
                className="bg-bg-white text-gray-600 hover:text-gray-700 hover:bg-bg-white h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto">
                  {" "}
                  <BiChevronRight color="#0003" size={30} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Monthsinput;
