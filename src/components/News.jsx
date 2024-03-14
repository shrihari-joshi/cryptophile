import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [cryptoNews, setCryptoNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist',
        headers: {
          'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
          'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCryptoNews(response.data.data.slice(0, 5)); // Fetch first 8 news items
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="cryptocurrencies">
      <h1>Cryptocurrency News</h1>
      {cryptoNews.length > 0 && (
        <div>
          {cryptoNews.map((newsItem, index) => (
            <div key={index}>
              <p><a href={newsItem.url} target="_blank">{newsItem.title}</a></p>
              <p>Description: {newsItem.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
