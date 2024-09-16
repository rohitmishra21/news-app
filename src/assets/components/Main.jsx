import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [search, setSearch] = useState("rohit sharma");
  const [newsData, setnewsData] = useState(null);
  const API_KEY = "d2258cba1769419981216d96e4a9273a";

  useEffect(() => {
    fechData();
  }, [search]);

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

  function userInput(event) {
    setSearch(event.target.value);
  }
  function main(eve) {
    setSearch(eve.target.value);
  }

  return (
    <div className="min-h-screen w-full">
      <nav className="xl:w-full h-32 flex xl:items-center xl:flex-row flex-col  xl:px-10 items-end gap-2  xl:justify-between bg-blue-300">
        <h1 className="xl:text-4xl text-2xl font-bold">Trendy news</h1>
        <div className="flex xl:gap-4 gap-2 text-xl  font-extrabold">
          <h1 className="cursor-pointer" onClick={main} value="All">
            All
          </h1>
          <h1 className="cursor-pointer" onClick={main} value="News">
            News
          </h1>
          <h1 className="cursor-pointer" onClick={main} value="Trending">
            Trending
          </h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search news"
            className="xl:w-80 cursor-pointer"
            onChange={changer}
          />
          <button
            className="xl:px-4 xl:py-2 bg-blue-950 text-white uppercase cursor-pointer tracking-wider font-semibold"
            onClick={fechData}
          >
            search 
          </button>
        </div>
      </nav>
      <div>
        <h1 className="xl:text-5xl font-bold text-center capitalize xl:py-6 py-4 drop-shadow-lg">
          stay update with trendy news
        </h1>
        <div className="buttons flex text-xs xl:text-xl gap-2 xl:py-6 py-4 items-center  justify-center">
          <button
            className="xl:px-4 xl:py-2 cursor-pointer hover:scale-95 transition-all bg-blue-950 text-white rounded-full px-2 py-1 "
            onClick={userInput}
            value="sports"
          >
            Sports
          </button>
          <button
            className="xl:px-4 xl:py-2 cursor-pointer hover:scale-95 transition-all bg-blue-950 text-white rounded-full px-2 py-1 "
            onClick={userInput}
            value="Politics"
          >
            Politics
          </button>
          <button
            className="xl:px-4 xl:py-2 cursor-pointer hover:scale-95 transition-all bg-blue-950 text-white rounded-full px-2 py-1 "
            onClick={userInput}
            value="Entertenment"
          >
            Entertenment
          </button>
          <button
            className="xl:px-4 xl:py-2 cursor-pointer hover:scale-95 transition-all bg-blue-950 text-white rounded-full px-2 py-1 "
            onClick={userInput}
            value="Education"
          >
            Education
          </button>
          <button
            className="xl:px-4 xl:py-2 cursor-pointer hover:scale-95 transition-all bg-blue-950 text-white rounded-full px-2 py-1 "
            onClick={userInput}
            value="Health"
          >
            Health
          </button>
        </div>
        <div>{newsData === null ? null : <Card data={newsData} />}</div>
      </div>
    </div>
  );
};

export default Main;
