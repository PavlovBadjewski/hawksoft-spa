import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const PaginationBar = ({
  currentItemsCount,
  currentPage,
  itemsPerPage,
  totalItems,
  action
}) => {
  const firstItem = ((currentPage - 1) * itemsPerPage) + 1;
  const lastItem = firstItem + currentItemsCount - 1;
  const totalPages = Math.floor(totalItems / itemsPerPage) + (totalItems % itemsPerPage > 0 ? 1 : 0); 
  const navigateFirst = () => { action(1); };
  const navigatePrev = () => { action(currentPage === 1 ? 1 : currentPage - 1); };
  const navigateNext = () => { action(currentPage === totalPages ? totalPages : currentPage + 1); };
  const navigateLast = () => { action(totalPages); };

  return(
    <div className='pagination'>
      <div className="pagination-bar">
        <FaAngleDoubleLeft onClick={navigateFirst} />
        <FaAngleLeft onClick={navigatePrev} />
        <span className='message'>{`items ${firstItem}-${lastItem} of ${totalItems}`}</span>
        <FaAngleRight onClick={navigateNext} />
        <FaAngleDoubleRight onClick={navigateLast} />
      </div>
    </div>
  );
}

export default PaginationBar;