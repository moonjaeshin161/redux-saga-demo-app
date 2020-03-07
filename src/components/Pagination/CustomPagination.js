import React from 'react';
import { PaginationItem, PaginationLink, Pagination } from 'reactstrap';

function CustomPagination({ totalsPost, postsPerPage, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalsPost / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {
                pageNumbers.map((number, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink onClick={() => paginate(number)} href="#">
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    )
}

export default CustomPagination;