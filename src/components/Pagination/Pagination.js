import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Context';
import './pagination.css'

const DashboardPagination = () => {
  const { totalCompany, companyPerPage, paginate } = useContext(GlobalContext);

  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalCompany / companyPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <>
      <section className='pagination-section'>
          <div className='pagination'>
            {pageNumbers.map((number) => (
              <div key={number}>
                <a className='paginate'
                  onClick={() => paginate(number)}
                  href='#'
                >
                  <p className='page-no'>{number}</p>
                </a>
              </div>
            ))}
          </div>
      </section>
    </>
  );
};

export default DashboardPagination;
