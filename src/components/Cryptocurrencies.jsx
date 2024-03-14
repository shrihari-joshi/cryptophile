import React, { useState, useEffect } from "react";
import axios from 'axios';
import millify from 'millify';

const Cryptocurrencies = () => {
  
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0'
        },
        headers: {
          'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCryptoData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="cryptocurrencies">
      <h1>Cryptocurrency Statistics</h1>
      {cryptoData && (
        <div>
          <p>Total cryptocurrencies: {cryptoData.data.stats.total}</p>
          <p>Total Coins: {millify(cryptoData.data.stats.totalCoins)}</p>
          <p>Total Markets: {millify(cryptoData.data.stats.totalMarkets)}</p>
          <p>Total Exchanges: {cryptoData.data.stats.totalExchanges}</p>
          <p>Total Market Cap: {millify(cryptoData.data.stats.totalMarketCap)}</p>
        </div>
      )}
    </div>
  );
};


export default Cryptocurrencies;
