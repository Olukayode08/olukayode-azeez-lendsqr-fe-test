import React, { useState, useEffect } from 'react';
import axios from 'axios';
const GlobalContext = React.createContext();

const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/';


const Context = ({ children }) => {
  const [active, setActive] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [company, setCompany] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [companyPerPage] = useState(15);
  const [userDetails, setUserDetails] = useState({});


  // Api Call
  const fetchCompany = async () => {
    const response = await fetch(url);
    const company = await response.json();
    setCompany(company);
  };
  useEffect(() => {
    fetchCompany();
  }, []);


    // Reset
      const handleReset = () => {
        fetchCompany()
      };

// Local storage
  localStorage.setItem('company', JSON.stringify(company));
  let retrieveDetails = JSON.parse(localStorage.getItem('company'));

  // Calling User
  const fetchUser = async (id) => {
    const urlUser = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
    const res = await fetch(urlUser);
    const user = await res.json();
    setUserDetails(user);
  };

  // Pagination
  const indexOfLastCompany = currentPage * companyPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
  const currentCompanys = company.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );
  const totalCompany = company.length;
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);


  return (
    <>
      <GlobalContext.Provider
        value={{
          active,
          setActive,
          screenSize,
          setScreenSize,
          company,
          currentCompanys,
          companyPerPage,
          totalCompany,
          paginate,
          userDetails,
          fetchUser,
          handleReset,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export { Context, GlobalContext };
