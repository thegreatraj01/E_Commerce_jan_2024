import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationPage({ totalPosts, postPerPage, currentPage, setCurrentPage }) {
    const totalPages = postPerPage !== 0 ? Math.ceil(totalPosts / postPerPage) : 0;

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationItems = () => {
        const items = [];

        // Add Previous button
        items.push(
            <Pagination.Prev key="prev" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        );

        // Add page numbers
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
                    {number}
                </Pagination.Item>
            );
        }

        // Add Next button
        items.push(
            <Pagination.Next
                key="next"
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
            />
        );

        return items;
    };

    return (
        <div>
            <Pagination>{renderPaginationItems()}</Pagination>
        </div>
    );
}

export default PaginationPage;
