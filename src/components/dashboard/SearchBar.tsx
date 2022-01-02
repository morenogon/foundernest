import React, { useState, useContext, useEffect } from 'react';

// styles
import styles from '../../styles/dashboard/SearchBar.module.css';

// context
import { CompaniesContext } from '../../context/CompaniesContext';

// interfaces
import { ICompany } from '../../interfaces/companies';

const SearchBar = () => {
  const { companies, setCompanies } = useContext(CompaniesContext);

  const [filter, setFilter] = useState<string>('');
  const [originalCompanies, setOriginalCompanies] = useState(companies);

  useEffect(() => {
    filter === ''
      ? setCompanies(originalCompanies)
      : setCompanies(filterCompaniesByName());
  }, [filter]);

  const filterCompaniesByName = (): ICompany[] => {
    const filteredCompanies = originalCompanies.filter((company: ICompany) => {
      const companyName = company.name.toLowerCase().trim();
      const filterInput = filter.toLowerCase().trim();

      return companyName.includes(filterInput);
    });

    return filteredCompanies;
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="What are you looking for?"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
