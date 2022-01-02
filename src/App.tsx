import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// db
import jsonCompanies from './db/companies.json';

// models
import { ICompany } from './interfaces/companies';

// context
import { CompaniesContext } from './context/CompaniesContext';

// components
import CompaniesDashboard from './components/dashboard/CompaniesDashboard';

const App = () => {
  const [companies, setCompanies] = useState<ICompany[]>(jsonCompanies);

  // On first Render/Mount only! => get/set companies from sessionStorage
  useEffect(() => {
    const sessionCompanies = sessionStorage.getItem('companies');

    if (!sessionCompanies) {
      sessionStorage.setItem('companies', JSON.stringify(companies));
    } else {
      setCompanies(JSON.parse(sessionCompanies));
    }
  }, []);

  const markAsInteresting = (id: number) => {
    const filteredCompanies = removeCompanyById(id, companies);
    const interestingCompany = searchCompanyById(id, companies);

    setCompanies(filteredCompanies);
    // todo uncomment
    // sessionStorage.setItem('companies', JSON.stringify(filteredCompanies));

    if (interestingCompany) {
      interestingCompany.interested = true;
      toast.info(
        `We are working on connecting you with ${interestingCompany.name}.`
      );
    }
  };

  // - remove company by id
  const removeCompanyById = (
    id: number,
    sourceList: ICompany[]
  ): ICompany[] => {
    return sourceList.filter((company: ICompany) => company.id !== id);
  };

  // 🔍 search company by id
  const searchCompanyById = (
    id: number,
    sourceList: ICompany[]
  ): ICompany | null => {
    const companyFound = sourceList.find(
      (company: ICompany) => company.id === id
    );

    return companyFound ? companyFound : null;
  };

  return (
    <div>
      <CompaniesContext.Provider
        value={{ companies, setCompanies, markAsInteresting }}
      >
        <CompaniesDashboard />
        <ToastContainer
          position="bottom-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </CompaniesContext.Provider>
    </div>
  );
};

export default App;
