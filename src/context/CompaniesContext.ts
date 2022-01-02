import { createContext } from 'react';
import { ICompany } from '../interfaces/companies';

export const CompaniesContext = createContext({
    companies: [] as ICompany[],
    setCompanies: (state: ICompany[]) => { },
    markAsInteresting: (id: number) => { }
});