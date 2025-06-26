import React, { useState, useEffect } from 'react';
import './BitcoinTicker.css';

const BitcoinTicker = () => {
  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5002';
        const response = await fetch(`${apiUrl}/api/bitcoin-market-data`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMarketData(data);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch Bitcoin market data:", e);
        setError('Could not fetch market data');
      }
    };

    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const renderTickerContent = () => {
    if (error) return <span>{error}</span>;
    if (!marketData || typeof marketData.current_price === 'undefined' || typeof marketData.price_change_percentage_24h === 'undefined') {
      return <span>Loading...</span>;
    }

    const { current_price: currentPrice, price_change_percentage_24h: priceChangePercentage24h } = marketData;
    const isPriceUp = priceChangePercentage24h >= 0;
    const priceChangeClass = isPriceUp ? 'price-up' : 'price-down';
    const priceChangeIndicator = isPriceUp ? '▲' : '▼';

    return (
      <span className={priceChangeClass}>
        BITCOIN (BTC) PRICE: ${currentPrice.toLocaleString()} {priceChangeIndicator} ({priceChangePercentage24h.toFixed(2)}%)
      </span>
    );
  };

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker-item">
          {renderTickerContent()}
        </div>
        <div className="ticker-item">
          {renderTickerContent()}
        </div>
      </div>
    </div>
  );
};

export default BitcoinTicker;
