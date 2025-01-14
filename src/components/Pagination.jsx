import React from "react";

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="mt-[1px] mb-[1px] flex justify-center">
                {pageNumbers.map((number) => (
                    <li key={number} className="ml-[5px] mr-[5px]">
                        <button onClick={() => paginate(number)} className="bg-[#2A52BE] text-white px-[7px] py-[1px] pointer rounded-full hover:bg-[#3465eb] transition-colors">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;