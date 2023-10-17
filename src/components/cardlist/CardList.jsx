import React from 'react'
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const CardList = async ({page}) => {
  const { posts, count } = await getData(page);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div
    className='xs:w-full lgl:basis-2/3'
    >
      <h1
      className='containerTitle'
      >
        Recent Posts
      </h1>
      <div
      className='posts'
      >
        {posts?.map((item) => (
          <Card item={item} key={item._id}/>
        ))}
        
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList;