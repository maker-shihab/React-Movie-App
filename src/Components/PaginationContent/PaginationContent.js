import { Pagination } from '@mui/material';
import React from 'react';
import './PaginationContent.css';

const PaginationContent = ({setPage, numOfPage = 10}) => {
    const handalePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div className='pagenation__content'>
            <Pagination count={numOfPage} onChange={(e) => handalePageChange(e.target.textContent)} color="primary" hideNextButton hidePrevButton />
        </div>
    );
};

export default PaginationContent;