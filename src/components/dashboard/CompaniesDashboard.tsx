import React from 'react';

// components
import CompaniesList from './CompaniesList';
import DashboardHeader from './DashboardHeader';
import SearchBar from './SearchBar';

const CompaniesDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <SearchBar />
      <CompaniesList />
    </div>
  );
};

export default CompaniesDashboard;
