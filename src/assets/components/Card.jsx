import React, { useEffect, useState } from 'react'

const Card = ({data}) => {


  
  console.log(data);
  
  return (
    <div className='flex w-full min-h-[300vh] px-24 justify-around flex-wrap gap-2 '>
   {data.map((curItem,index)=>{
    return(
      <>
      <div key={index} className=' w-[32%]  '>
      <div className='flex flex-col gap-5 '>
        <img className='w-full h-full object-cover object-center' src={curItem.urlToImage} alt="" />
        <h1 className='text-xl'>{curItem.title}</h1>
        <h1 className='text-xl'>{curItem.description}</h1>
        <button className='px-7 py-2 bg-blue-950 text-white' onClick={() => window.open(curItem.url)}>read more</button>
      </div>
      </div>
     
      </>
    )
   })}
    </div>
  )
}

export default Card