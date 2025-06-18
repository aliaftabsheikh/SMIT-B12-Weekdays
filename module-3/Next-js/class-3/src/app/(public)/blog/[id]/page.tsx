'use client'
import { demiData } from "@/data/DemiDeta";
// import { useParams, useSearchParams } from "next/navigation";
import React from "react";


const BlogDetailedPage = ({ params }: { params: { id: string } }) => {

    // const { id } = useParams();
    const {id} = params

  const detailBlog = demiData.find(
    (item: any) => item.id === parseInt(id)
  );

  if (!detailBlog) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <h1>{detailBlog.title}</h1>
      <p>{detailBlog.content}</p>
      <p>Author: {detailBlog.author}</p>
    </div>
  );
};

export default BlogDetailedPage;
