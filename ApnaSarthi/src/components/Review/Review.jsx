import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
function Review() {
  const reviews = [
    {
      comment:
        "Seamless booking, excellent vehicle, and responsive customer service. Highly recommend for reliable commercial vehicles",
      user: "@rajveer",
      rating: "3",
    },
    {
      comment:
        "Punctual driver, clean vehicle, stress-free journey. Great service overall",
      user: "@Maria S",
      rating: "4",
    },

    {
      comment:
        "Perfect car, reasonable rates, and flexible options. Highly recommended!",
      user: "@Raj",
      rating: "4",
    },
    {
      comment:
        "User-friendly booking, clean car, and great performance. Excellent experience!",
      user: "@Sarah K.",
      rating: "4",
    },

    {
      comment:
        "Spacious van, easy booking, and accommodating customer service. Highly recommended!",
      user: "@ameet",
      rating: "4",
    },
  ];
  return (
    <>
      <div className=" container  lg:mx-8 mx-2 rounded-xl px-4 border-4 border-blue-600">
        <h1 className="text-3xl font-bold my-8">Customer Reviews</h1>
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            comment={review.comment}
            user={review.user}
            rating={review.rating}
          />
        ))}
      </div>
      <div className="lg:ml-8 ml-2  border-4 border-blue-600 mt-4 rounded-xl lg:mr-48 mr-2">
        <h1 className="text-xl font-semibold ml-6 mt-4"> Leave a Review</h1>
        <form className="w-full max-w-sm">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block mt-4 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Leave Comment
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 mt-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="Leave comment"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-4">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Review;