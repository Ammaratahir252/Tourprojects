import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';
import { FaSearch, FaStar, FaRegStar } from 'react-icons/fa';

const tours = [
  { id: 1, location: 'London', price: '$99', rating: 4.5, reviews: 2, image: require('../assets/country1.jpg') },
  { id: 2, location: 'Bali', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country2.jpg') },
  { id: 3, location: 'Bangkok', price: '$99', rating: 0, reviews: 0, image: require('../assets/country3.jpg') },
  { id: 4, location: 'Phuket', price: '$99', rating: 5.0, reviews: 2, image: require('../assets/country4.jpg') },
  { id: 5, location: 'Bali', price: '$99', rating: 0, reviews: 0, image: require('../assets/country5.jpg') },
  { id: 6, location: 'Tokyo', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country6.jpg') },
  { id: 7, location: 'Paris', price: '$99', rating: 4.0, reviews: 3, image: require('../assets/country7.jpg') },
  { id: 8, location: 'Sylhet', price: '$99', rating: 0, reviews: 0, image: require('../assets/country8.jpg') },
];

const Tour = () => (
  <div className="tour-page">
    <div className="tour-header">
      <h1 className="tour-title">All Tours</h1>
    </div>

    {/* Search Bar Section */}
    <div className="tour-search">
      <div className="search-fields">
        {['Location', 'Distance', 'Min People'].map((label, index) => (
          <div className="search-field" key={index}>
            <label>{label}</label>
            <input type={label === 'Distance' || label === 'Min People' ? 'number' : 'text'} placeholder={label === 'Location' ? 'Where are you going?' : label === 'Distance' ? 'Distance (km)' : '1'} />
          </div>
        ))}
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>

    {/* Tours List */}
    <div className="tour-list">
      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.location} className="tour-image" />
          <div className="tour-info">
            <div className="tour-location">{tour.location}</div>
            <div className="tour-rating">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(tour.rating) ? <FaStar key={i} color="#ffcc00" /> : <FaRegStar key={i} color="#ffcc00" />
              )}
              {tour.reviews > 0 && <span> ({tour.reviews})</span>}
            </div>
            <div className="tour-price">{tour.price} / per person</div>
            <Link to={`/tours/${tour.id}`} className="book-now-btn">Book Now</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Tour;
