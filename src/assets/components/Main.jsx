import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
  const [search, setSearch] = useState();
  const [newsData, setnewsData] = useState(null);
  const API_KEY = "d2258cba1769419981216d96e4a9273a";

  const fechData = async () => {
    const responce = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const data = await responce.json();
    setnewsData(data.articles);
    
  };

  function changer(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="min-h-screen w-full">
      <nav className="w-full h-32 flex items-center px-10 justify-between bg-blue-300">
        <h1 className="text-4xl font-bold">Trendy news</h1>
        <div className="flex gap-4 text-xl">
          <h1>All</h1>
          <h1>News</h1>
          <h1>Trending</h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-80"
            onChange={changer}
          />
          <button
            className="px-4 py-2 bg-blue-950 text-white uppercase tracking-wider font-semibold"
            onClick={fechData}
          >
            search
          </button>
        </div>
      </nav>
      <div>
        <h1 className="text-5xl font-bold text-center capitalize py-6">
          stay update with trendy news
        </h1>
        <div className="buttons flex text-2xl gap-2 py-6 items-center cursor-pointer justify-center">
          <h1 className="px-4 py-2 bg-blue-950 text-white rounded-full" >
            Sports
          </h1>
          <h1 className="px-4 py-2 bg-blue-950 text-white rounded-full">
            Politics
          </h1>
          <h1 className="px-4 py-2 bg-blue-950 text-white rounded-full">
            Entertenment
          </h1>
          <h1 className="px-4 py-2 bg-blue-950 text-white rounded-full">
            Education
          </h1>
          <h1 className="px-4 py-2 bg-blue-950 text-white rounded-full">
            Health
          </h1>
        </div>
        <div>
          {newsData === null ? null : <Card data={newsData} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
