import React, { useState } from 'react'
import News from './News';
import {useLoaderData } from 'react-router-dom';

function Home() {

  const jsonData = useLoaderData()
 
  // console.log(newsData)
  return (
    <div>
    <News></News>
    </div>
  )
}

export default Home;