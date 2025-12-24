import React from 'react'
import { useLoaderData } from 'react-router-dom'

function NewsDetails() {
    const newsDetails = useLoaderData();
    // console.log(newsDetails)
  const {title,author,image_url,details}= newsDetails;
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
    
     <p>{details}</p>
    
    <div className="card-actions justify-end items-center">
      <div className="badge badge-outline border-4 border-pink-300">{author.name}</div>
      <div className="w-20 border-4 border-pink-300 rounded-full"><img className='rounded-full' src={author.img} /></div>
    </div>
  </div>
</div>
  )
}

export default NewsDetails