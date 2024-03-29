import React from "react";
const Book = ({ book }) => {
  return (
    <div className="max-w-sm mx-auto">
      <li
        key={book.id}
        className="flex flex-col space-y-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
      >
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-gray-700">{book.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Author: <span className="text-gray-800">{book.author}</span>
          </p>
          {/* <p className="text-sm text-gray-600">
            Year: <span className="text-gray-800">{book.year}</span>
          </p> */}
        </div>
        <a
          href={`/dashboard/book/${book.id}`}
          className="inline-block mt-2 text-blue-500 hover:underline"
        >
          View Details
        </a>
      </li>
    </div>
  );
};

export default Book;
