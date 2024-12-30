

const videoReviews = [
  {
    videoUrl: 'your-video-url1.mp4',
    custName: 'Customer 1',
    custEmail: 'customer1@email.com',
    starRating: 5,
  },
  {
    videoUrl: 'your-video-url2.mp4',
    custName: 'Customer 2',
    custEmail: 'customer2@email.com',
    starRating: 4,
  },
  // Add more video review data objects
];

const textReviews = [
  {
    custProfilePicture: 'customer-profile1.jpg',
    custName: 'Customer 1',
    custEmail: 'customer1@email.com',
    starRating: 5,
    custMessage: 'Awesome product! Highly recommended to everyone!',
    reviewImage: 'image-url1.jpg',
  },
  {
    custProfilePicture: 'customer-profile2.jpg',
    custName: 'Customer 2',
    custEmail: 'customer2@email.com',
    starRating: 4,
    custMessage: 'Great service, will use again.',
    reviewImage: 'image-url2.jpg',
  },
  // Add more text review data objects
];

const WallOfLove = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Main Container for the Wall of Love */}
      <div className="w-[70vw] h-[33vh] overflow-hidden relative">
        {/* Video Reviews Section (Left) */}
        <div className="absolute w-full h-full flex flex-col animate-scroll-up">
          {videoReviews.map((review, index) => (
            <div key={index} className="video-review bg-white p-6 shadow-lg rounded-lg mb-6 flex-grow">
              <div className="relative w-full h-72 overflow-hidden rounded-lg">
                <video autoPlay loop muted className="w-full h-full object-cover">
                  <source src={review.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{review.custName}</h2>
                  <p className="text-sm">{review.custEmail}</p>
                  <div className="flex mt-2">
                    {Array(review.starRating)
                      .fill(
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 20 20" className="w-5 h-5">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.976a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.376 2.453a1 1 0 00-.364 1.118l1.286 3.976c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.376 2.453c-.782.57-1.837-.197-1.538-1.118l1.286-3.976a1 1 0 00-.364-1.118L2.46 9.403c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.976z" />
                        </svg>
                      )
                      .map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Text Reviews Section (Right) */}
        <div className="absolute w-full h-full flex flex-col animate-scroll-down">
          {textReviews.map((review, index) => (
            <div key={index} className="review bg-white p-6 shadow-lg rounded-lg mb-6 flex-grow">
              <div className="flex items-center">
                <img
                  src={review.custProfilePicture}
                  alt={review.custName}
                  className="w-15 h-15 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{review.custName}</h3>
                  <p className="text-sm">{review.custEmail}</p>
                </div>
              </div>
              <div className="flex mt-2">
                {Array(review.starRating)
                  .fill(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.12-.61L12 2 9.12 8.63l-7.12.61 5.46 4.73-1.64 7.03L12 17.27z" />
                    </svg>
                  )
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <p className="text-sm mt-4">{review.custMessage}</p>
              {review.reviewImage && (
                <div className="mt-4 w-full h-40 overflow-hidden rounded-lg shadow-lg">
                  <img src={review.reviewImage} alt="Review" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
