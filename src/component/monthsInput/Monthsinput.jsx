import React from "react";
import monthsinput from "./monthsinput.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useState from "react-usestateref";

export const Monthsinput = () => {
  var [month, setMonth, monthRef] = useState(0);

  function na9is() {
    if (monthRef.current<1) {
      setMonth(0);
    }
    else{
      setMonth(monthRef.current - 1);
    }
    console.log(monthRef.current);
  }
  function za2id() {
    if (monthRef.current>11) {
      setMonth(12);
    }
    else{
      setMonth(monthRef.current + 1);
    }
    console.log(monthRef.current);
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
                max={12}
                min={0}
                value={month}
                onChange={(event) => {
                  setMonth(event.target.value);
                  console.log(monthRef.current);
                }}
                type="number"
                className="outline-none focus:outline-none text-center w-full bg-white font-Work-Sans text-md hover:text-blue-Gray-400 focus:text-blue-Gray-400  md:text-basecursor-default flex items-center text-blue-Gray-400  outline-none"
                name="custom-input-number"
                defaultValue={0}
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
