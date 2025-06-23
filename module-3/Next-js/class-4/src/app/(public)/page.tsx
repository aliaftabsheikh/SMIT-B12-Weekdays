// 'use client'


// import { log } from "console";
// import Image from "next/image";
// import { useState, useEffect } from "react";

async function fetchData() {
  const data = await fetch("https://fakestoreapi.com/products")
  return await data.json()   // promise 
}

export default async function Home() {
 
// const [data, setdata] = useState([])

// console.log('data', data);

//   useEffect(()=>{
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const result = await response.json();
//         setdata(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [])
  


// const result = await  fetchData()
// console.log('result', result);

 const data = await fetch("https://fakestoreapi.com/products")
const result = await data.json()   // promise 
console.log('result', result);

// if(result){
//   return (
//     NotFound()
//   );
// }

  return (
    <div className="flex h-screen items-center justify-center bg-red-600 text-8xl text-black font-bold">
      Hello World!
      {/* {
      data?.map((item: any) => (
        <div key={item.id} className="m-4 p-4 border rounded-lg bg-white shadow-lg">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-700">${item.price}</p>
        </div>
      ))  
      } */}
    </div>

  );
}
