export interface ICompany {
    id: number,
    name: string,
    logo: string,
    website: string,
    blurb: string,
    operating_locations: string[],
    headquarters: string[],
    sectors: string[],
    num_investors: number,
    days_left: number,
    match_percentage: number,
    interested: boolean,
}

export interface ICompanies {
    companies: ICompany[]
}