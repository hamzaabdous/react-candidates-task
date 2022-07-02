import React, { useEffect } from "react";
import useState from "react-usestateref";

import { BiDollar } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import data from "../assets/Data/Products.json";
function Index() {
  var [productId, setProductId, productIdRef] = useState(0);
  var [month, setMonth, monthRef] = useState(0);
  var [amount, setAmount, amountRef] = useState("");

  function changeIndex(product) {
    console.log("id", product.id);
    if (product.id == 20) {
      setProductId(0);
    } else if (product.id == 21) {
      setProductId(1);
    } else setProductId(2);
  }

  return (
    <div className="xl:mr-96 xl:ml-96 xl:mt-10  lg:mr-48 lg:ml-48 lg:mt-32  sm:mr-32 sm:ml-32 sm:mt-32 mt-8">
      <div className="flex justify-center content-center text-blue-600 text-lg font-small">
        <h1>
          Let's plan your{" "}

            <span className="text-blue-600 text-xl font-bold">
            Loan
            </span>
 
        </h1>
      </div>
      <div className="container mx-auto bg-white rounded-xl shadow-lg border p-8 m-6 ">
        <div className="flex  justify-center content-center space-x-4">
          {data.map((e) => {
            return (
              <div
                onClick={() => changeIndex(e)}
                className="item flex justify-center items-center "
              >
                <img src={e.image} width={100} alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col  sm:flex-row sm:space-x-6 pt-8">
          <div className="item w-full h-full">
            <div>
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-500  dark:text-black"
              >
                {data[productIdRef.current].name} amount
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BiDollar color="#0003" size={20} />
                </div>
                <input
                  type="text"
                  pattern="[0-9]*"
                  min={data[productIdRef.current].min_amount}
                  max={data[productIdRef.current].max_amount}
                  id="input-group-1"
                  className="bg-white border border-gray-200 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  onChange={(e)=>{
                    setAmount((new Intl.NumberFormat().format(e.target.value)) );
                    console.log("amount",amountRef.current);
                  }}
                  value={

                    new Intl.NumberFormat("de-DE").format(
                      amountRef.current
                  )   
                                }
                />
              </div>
            </div>
          </div>
          <div className="item w-full h-full ">
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-black"
            >
              Number of Months
            </label>
            <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-0">
              <span
                onClick={() => {
                  setMonth(parseFloat(monthRef.current)  - 1);
                }}
                className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
              >
                <AiOutlineLeft color="#0006" size={20} />
              </span>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={monthRef.current}
                value={monthRef.current}
                min="0"
                max="12"
                onChange={(e) => {
                    setMonth(e.target.value);
                    console.log(monthRef.current);
                }}
                className="px-0 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full md:pl-28 xl:pl-48 pl-28"
              />
              <span
                onClick={() => {
                  setMonth(parseFloat( monthRef.current) + 1);
                }}
                className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
              >
                <AiOutlineRight color="#0006" size={20} />
              </span>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg border-gray-200">
          <div className="flex  space-x-6 p-0 ">
            <div className="flex justify-start item w-full h-full p-6">
              <h1>Monthly amount</h1>
            </div>
            <div className=" flex item justify-end  w-full h-full text-blue-500 text-3xl font-bold p-5">
              <h1>$521</h1>
            </div>
          </div>
          <div className="flex space-x-6 p-0 ">
            <div className="item w-full h-full bg-blue-50 p-6 text-gray-500 text-xs font-small">
              <h1>
                You're planning 12
                <span className="text-black font-medium">
                  {" "}
                  monthly deposit
                </span>{" "}
                to reach your{" "}
                <span className="text-black font-medium">$25,000 </span> goal by{" "}
                <span className="text-black font-medium">July 2022. </span>
                The total amount will be{" "}
                <span className="text-black font-medium">$26,300 </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 p-0 ">
          <div className="flex item w-full h-full  p-5 justify-center content-center">
            <button
              className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl w-72 h-12"
              type="button"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
