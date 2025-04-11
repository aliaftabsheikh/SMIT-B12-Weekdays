import React, { useState } from "react";

const App = () => {
  // const [count, setCount] = React.useState(0);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    const data = await fetch("https://fakestoreapi.com/products");

    const result = await data.json();

    setData(result);
    setLoader(false);
  }

  console.log(data);

  return (
    <>
      {/* <div className="flex justify-center h-screen items-center  gap-4">
        <button
          onClick={handleIncrement}
          className="bg-blue-500 px-2 rounded-full"
        >
          +
        </button>
        {count}
        <button
          onClick={handleDecrement}
          className="bg-red-500 px-2 rounded-full"
        >
          -
        </button>
      </div> */}

<div className="flex justify-center mt-10">

<button
  className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-700 cursor-pointer"
  onClick={fetchData}
>
  Fetch Data !
</button>
</div>
      {loader ? (
        <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin a"></div>
      ) : (
        <div className="flex justify-center flex-wrap gap-3 my-8">
          {data.map((item, index) => {
            return (
              <div key={index} className="border-2 w-96 p-6 ">
                <img className="w-full h-96 object-cover bg-slate-300" src={item.image} />
                <p className="font-bold text-2xl text-center mt-4 py-2">{item.title}</p>
                <p className="text-center capitalize">{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default App;
