import React from "react";

const Pagination = ({ totalRepos, postPerPage, paginate }) => {
    const PageNumber = [];
    for (let i = 1; i <= Math.ceil(totalRepos / postPerPage); i++) {
        PageNumber.push(i);
    }
    return (
        <nav>
            <ui className="pagination">
                {PageNumber.map((num, id) => (
                    <li key={id} className="page-item">
                        <a
                            href="!#"
                            onClick={() => paginate(num)}
                            className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ui>
        </nav>
    );
};

export default Pagination;
