import React, { memo } from "react";

// ✅ Data (can later come from API)
const reviewsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    message: "Amazing service and quality work!",
  },
  {
    id: 2,
    name: "Amit Verma",
    message: "Very professional and fast delivery.",
  },
  {
    id: 3,
    name: "Neha Singh",
    message: "Highly recommended photo studio!",
  },
  {
    id: 4,
    name: "Pooja Gupta",
    message: "Loved the photography skills!",
  },
];

// ✅ Reusable Card Component (Optimized)
const ReviewCard = memo(({ name, message }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300">
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {message}
      </p>
      <h4 className="font-semibold text-gray-800">{name}</h4>
    </div>
  );
});

// ✅ Main Section Component
const ReviewsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-blue-500 mb-2">Client Review</p>

        <h2 className="text-3xl font-bold mb-10">
          Trusted By Clients
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              message={review.message}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;