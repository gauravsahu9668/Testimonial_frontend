import React from "react";

// Props type definition
interface RatingProps {
  rating: number; // Current rating
  maxRating?: number; // Maximum rating (default to 5)
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
  // Generate an array for stars
  const stars = Array.from({ length: maxRating }, (_, index) => {
    return index < rating ? "filled" : "empty";
  });

  return (
    <div className="flex space-x-1">
      {stars.map((type, index) =>
        type === "filled" ? (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.49l2.92 6.1 6.75.62-5 4.56 1.56 6.7L12 17.89l-6.24 3.59 1.56-6.7-5-4.56 6.75-.62L12 2.49z" />
          </svg>
        ) : (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.49l2.92 6.1 6.75.62-5 4.56 1.56 6.7L12 17.89l-6.24 3.59 1.56-6.7-5-4.56 6.75-.62L12 2.49z" />
          </svg>
        )
      )}
    </div>
  );
};

export default Rating;
