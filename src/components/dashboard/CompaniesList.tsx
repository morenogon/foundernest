import React, { useContext } from 'react';

// styles
import styles from '../../styles/dashboard/CompaniesList.module.css';

// context
import { CompaniesContext } from '../../context/CompaniesContext';

// components
import CompanyCard from './CompanyCard';

function CompaniesList() {
  const { companies } = useContext(CompaniesContext);

  return (
    <div className={styles.list}>
      {companies.map(
        ({
          id,
          name,
          logo,
          website,
          blurb,
          operating_locations,
          headquarters,
          sectors,
          num_investors,
          days_left,
          match_percentage,
          interested,
        }) => (
          <CompanyCard
            key={id}
            id={id}
            name={name}
            logo={logo}
            website={website}
            blurb={blurb}
            operating_locations={operating_locations}
            headquarters={headquarters}
            sectors={sectors}
            num_investors={num_investors}
            days_left={days_left}
            match_percentage={match_percentage}
            interested={interested}
          />
        )
      )}
    </div>
  );
}

export default CompaniesList;
