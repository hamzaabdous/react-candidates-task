import React, { useEffect } from "react";
import useState from "react-usestateref";
import Monthsinput from "../component/monthsInput/Monthsinput"

import NumberFormat from "react-number-format";

import { BiDollar } from "react-icons/bi";
import data from "../assets/Data/Products.json";
function Index() {
  var [productId, setProductId, productIdRef] = useState(0);
  var [month, setMonth, monthRef] = useState(0);
  var [amount, setAmount, amountRef] = useState("");
  var [amountShow, setAmountShow, amountShowRef] = useState("");
  var [monthlyAmount, setMonthlyAmount, monthlyAmountRef] = useState(0);
  var [totalAmount, setTotalAmount, totalAmountRef] = useState(0);

  function changeIndex(product) {
    console.log("id", product.id);
    if (product.id == 20) {
      setProductId(0);
    } else if (product.id == 21) {
      setProductId(1);
    } else setProductId(2);
  }
  const handleChange = (prop) => (event) => {
    setAmount(event.target.value);
    console.log(amountRef.current + 100);
  };
  return (
    <div className="sm:w-560 sm:h-511 w-400 h-586 xl:mr-96 xl:ml-96 xl:mt-10  lg:mr-48 lg:ml-48 lg:mt-32  sm:mr-32 sm:ml-32 sm:mt-20 mt-8 ">
      <div className="flex justify-center content-center text-blue-600 text-lg font-Work-Sans">
        <h1>
          Let's plan your{" "}
          <span className="text-blue-600 text-xl font-bold">Loan</span>
        </h1>
      </div>
      <div className="container mx-auto bg-white rounded-lg shadow-lg border p-8 m-6 ">
        <div className="flex  justify-center content-center space-x-4">
          {data.map((e) => {
            return (
              <div
                onClick={() => changeIndex(e)}
                className="item flex justify-center items-center "
              >
                <img src={e.image} width={86} alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col  sm:flex-row sm:space-x-6 pt-8">
          <div className="item w-full h-full">
            <div>
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm Work-Sans text-gray-900  dark:text-black"
              >
                {data[productIdRef.current].name} amount
              </label>
              <div className="relative mb-6 w-18">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BiDollar color="#0003" size={20} />
                </div>
                <NumberFormat
                  id="input-group-1"
                  className="bg-white border border-blue-Gray-50 font-Rubik text-blue-Gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-black-700 dark:border-blue-Gray-50 dark:placeholder-gray-400 dark:text-black-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={amountShowRef.current}
                  onValueChange={(values) => {
                    const { formattedValue, value } = values;
                    // formattedValue = $2,223
                    // value ie, 2223
                    setAmountShow(formattedValue);
                    setAmount(parseFloat(value));
                    console.log(parseFloat(value));
                  }}
                  thousandSeparator={true}
                />
                
              </div>
            </div>
          </div>
          <div className="item w-full h-full ">
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm text-blue-Gray-900 font-Work-Sans  dark:text-black"
            >
              Number of Months
            </label>
            <div className="relative mt-10 mb-8 flex w-full flex-wrap items-stretch ">
              <Monthsinput />            
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-blue-Gray-50">
          <div className="flex  space-x-6 p-0 ">
            <div className="flex justify-start text-blue-Gray-900 font-Work-Sans item w-full h-full p-6">
              <h1>Monthly amount</h1>
            </div>
            <div className=" flex item justify-end  w-full h-full text-brandColorSecondary text-3xl font-Rubik pt-7 pr-4 sm:p-5">
              <h1>${monthlyAmountRef.current}</h1>
            </div>
          </div>
          <div className="flex space-x-6 p-0 ">
            <div className="item w-full h-full bg-blue-Gray-10 p-6 text-blue-Gray-900 font-Work-Sans text-xs ">
              <h1>
                You're planning {monthRef.current}
                <span className=" font-bold">
                  {" "}
                  monthly deposit
                </span>{" "}
                to reach your{" "}
                <span className="font-bold">$25,000 </span> goal by{" "}
                <span className="font-bold">July 2022. </span>
                The total amount will be{" "}
                <span className="font-bold">${totalAmountRef.current} </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 p-0 ">
          <div className="flex item w-full h-full  p-5 justify-center content-center">
            <button
              className="hover:bg-brandColorPrimary bg-brandColorPrimary text-white font-bold py-2 px-4 rounded-3xl w-72 h-12"
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
