import React, { useState, useEffect } from 'react';
import style from '../assets/Styles/Cards.module.css';
import { useCreate } from '../Context/CreateContext';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useCreate(); // Use the search query from context

  // Function to fetch cards from the server
  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/cards');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setCards(data);
        setFilteredCards(data);
      } else {
        throw new Error('Received non-JSON response');
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter cards based on the search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCards(cards);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = cards.filter(card =>
        card.title.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredCards(filtered);
    }
  }, [searchQuery, cards]);

  // Fetch cards on component mount
  useEffect(() => {
    fetchCards();
    // Optional: Clean up function to handle component unmount
    return () => {
      setCards([]);
      setFilteredCards([]);
    };
  }, []);

  if (loading) {
    return <p className={style.loading}>Loading cards...</p>;
  }

  return (
    <div className={style.cardsContainer}>
      {error && <p className={style.error}>Error: {error}</p>}
      {filteredCards.length > 0 ? (
        filteredCards.map(card => (
          <div key={card.title} className={style.card}>
            <h2>
              <Link to={`/card/${encodeURIComponent(card.title)}`} aria-label={`View details for ${card.title}`}>
                {card.title}
              </Link>
            </h2>
            <p>{card.description}</p>
          </div>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
};

export default Cards;
