import React from 'react'
import useFetchData from '../Hooks/useFetchData';


const Card = () => {

  const data = useFetchData()

  return (
    <div className='flex flex-wrap justify-evenly'>
      {data && data.map((news, i) => (
        <div key={i} className="max-w-sm mt-9 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-300 dark:border-gray-300">
          <a href="#">
            <img className="rounded-t-lg mx-auto" src={news?.urlToImage === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcFI6hTmgUtdxQTZktMt5KgEbySf4mtRgfQ&s" : news?.urlToImage} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{news.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">{news.content}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
