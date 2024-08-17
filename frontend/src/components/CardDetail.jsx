import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For accessing URL parameters
import style from '../assets/Styles/CardDetail.module.css'; // Import your CSS module

const CardDetail = () => {
  const { title } = useParams(); // Get the title parameter from the URL
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch card data by title
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(`https://futureskill.onrender.com/api/cards/${encodeURIComponent(title)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setCard(data);
        } else {
          throw new Error('Received non-JSON response');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [title]);

  if (loading) {
    return <p className={style.loading}>Loading card details...</p>;
  }

  if (error) {
    return <p className={style.error}>Error: {error}</p>;
  }

  if (!card) {
    return <p className={style.noCard}>No card found</p>;
  }

  return (
    <div className={style.cardDetail}>
      <h1 className={style.title}>{card.title}</h1>
      <p className={style.description}>{card.description}</p>
    </div>
  );
};

export default CardDetail;
