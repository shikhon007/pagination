import React from "react";

const Pagination = ({ postPerPage, totalPage, paginate }) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <ul className="flex space-x-4 bg-slate-400">
            {pageNumber.map((number, index) => (
                <li key={index}><a className="  border-r-2" onClick={() => paginate(number)} href="#">{number}</a></li>
            ))}
        </ul>
    )
};

export default Pagination;
