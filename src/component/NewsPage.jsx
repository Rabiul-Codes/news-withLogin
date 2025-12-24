import React from 'react'
import { Link } from 'react-router-dom';

function NewsPage({news}) {
  // console.log(news)
  const {title,author,image_url,details,id}= news;
  return (
   <div className="card bg-base-200 my-2  shadow-lg">
  <figure>
    <img
      src={image_url} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    {
      details.length > 150? <p>{details.slice(0,150)} <Link to ={`/news/${id}`}className='text-blue-400'>Read More...</Link> </p>:<p>{details}</p>
    }
    <div className="card-actions justify-end items-center">
      <div className="badge badge-outline border-4 border-pink-300">{author.name}</div>
      <div className="w-20 border-4 border-pink-300 rounded-full"><img className='rounded-full' src={author.img} /></div>
    </div>
  </div>
</div>
  )
}

export default NewsPage