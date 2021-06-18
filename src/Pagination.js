import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div>
      <ul className="pageno-container">
        {pageNum.map((numbers) => (
          <li className="pageno">
            <a onClick={() => paginate(numbers)} href="1#">
              {numbers}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
