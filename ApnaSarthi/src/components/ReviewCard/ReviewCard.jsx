import React from 'react'

function ReviewCard({comment, user, rating}) {
  return (
    <div className="max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 p-6">
    <div className="md:flex">
      <div className="p-4">
        <p className="text-gray-700 text-base">{comment}</p>
        <div className="mt-2">
          <h3 className="text-indigo-500 font-semibold">{user}</h3>
          <h3 className="text-yellow-500">Rating: {rating} / 5</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReviewCard