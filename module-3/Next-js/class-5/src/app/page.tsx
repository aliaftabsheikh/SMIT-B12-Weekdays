
import Image from "next/image";
import { fetchData } from "./utilities/fetchData";
import {notFound} from 'next/navigation';


export default async function Home() {
  // const data = await fetchData();
  // console.log('data', data);

const data = await fetchData("http://localhost:3000/api/products" );


if(!data){
 
    notFound()
  
}




console.log('data', data);




  return (
    <div>{data?.map((item: any, index: number)=>(
      <div key={index} className="m-4 p-4 border rounded-lg bg-white shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
        <p className="text-gray-700">${item.price}</p>
      </div>
    ))}</div>
  );
}
