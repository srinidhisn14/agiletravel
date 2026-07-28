import { FaStar } from "react-icons/fa";

export default function DestinationCard({ destination }) {
  return (
    <div className="destination-card">

      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="destination-card__content">

        <h3>{destination.name}</h3>

        <p className="country">
          {destination.country}
        </p>

        <p>
          {destination.tagline}
        </p>

        <div className="destination-card__info">

          <span>
            <FaStar />
            {destination.rating}
          </span>

          <strong>
            ${destination.price}
          </strong>

        </div>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
}