import { Link } from "react-router-dom"; // Import Link for navigation between pages
import { AiOutlineEdit } from "react-icons/ai"; // Import edit icon from react-icons
import { BsInfoCircle } from "react-icons/bs"; // Import info icon from react-icons
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Import add and delete icons from react-icons

// BooksTable component is used to display a table with a list of books and operations (view, edit, delete) for each book
const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      {/* This is the table with some basic styling using Tailwind CSS */}
      
      <thead>
        {/* Table header that defines column names */}
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Author</th> {/* This column is hidden on smaller screens */}
          <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th> {/* This column is hidden on smaller screens */}
          <th className="border border-slate-600 rounded-md">Operations</th> {/* Column for operations (view, edit, delete) */}
        </tr>
      </thead>
      
      <tbody>
        {/* The body of the table where each book is listed */}
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            {/* Each row corresponds to a book and contains its details */}
            
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1} {/* The index is shown here as the book number in the table */}
            </td>
            
            <td className="border border-slate-700 rounded-md text-center">
              {book.title} {/* Display the book title */}
            </td>
            
            <td className="border border-slate-700 rounded-md text-center">
              {book.author} {/* Display the author of the book */}
            </td>
            
            <td className="border border-slate-700 rounded-md text-center">
              {book.publishYear} {/* Display the publication year of the book */}
            </td>
            
            <td className="border border-slate-700 rounded-md text-center">
              {/* This column contains icons for various operations */}
              <div className="flex justify-center gap-x-4">
                {/* Link to the book details page */}
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                
                {/* Link to the book edit page */}
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-800" />
                </Link>
                
                {/* Link to the book delete page */}
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
