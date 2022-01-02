import React, { useContext } from 'react';

import styles from '../../styles/dashboard/DashboardHeader.module.css';

// context
import { CompaniesContext } from '../../context/CompaniesContext';

const DashboardHeader = () => {
  const { companies } = useContext(CompaniesContext);

  return (
    <div className={styles.dashboardHeader}>
      <h3 className={styles.discover}>Discover ({companies.length})</h3>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGgwwwFh132OQ/company-logo_200_200/0/1592940352995?e=2159024400&v=beta&t=Vdjtsj8tm0wIAz0N0ATmGwJcOYxEHeWdAUmV1BQ9j_k"
        alt="Logo of Foundernest"
        width="50"
        height="50"
      />
    </div>
  );
};

export default DashboardHeader;
