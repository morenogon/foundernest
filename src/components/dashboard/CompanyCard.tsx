import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import ArticleIcon from '@mui/icons-material/Article';
import MapIcon from '@mui/icons-material/Map';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';

// styles
import styles from '../../styles/dashboard/CompanyCard.module.css';

// interfaces
import { ICompany } from '../../interfaces/companies';

// context
import { CompaniesContext } from '../../context/CompaniesContext';

// components
import NotificationCard from '../NotificationCard';

const CompanyCard = ({
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
}: ICompany) => {
  const { markAsInteresting } = useContext(CompaniesContext);

  return (
    <div className={styles.card}>
      <header className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <img src={logo} alt="Logo of the company" width="50" height="50" />
          <div className={styles.nameContainer}>
            <h4 className={styles.name}>{name}</h4>
            <div>
              <a href={website} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Tooltip title="Investors looking at this company">
            <Badge
              className={styles.badge}
              badgeContent={num_investors}
              color="secondary"
            >
              <PersonIcon color="action" />
            </Badge>
          </Tooltip>
          <NotificationCard
            text={`${match_percentage} % Match`}
            type="secondary"
          />
          <NotificationCard text={`${days_left} DAYS LEFT`} type="primary" />
        </div>
      </header>
      <section className={styles.infoSection}>
        <div>
          <div className={styles.titleSection}>
            <ArticleIcon color="action" />
            <h4>Blurb</h4>
          </div>
          <p>{blurb}</p>
        </div>
        <div className={styles.secondSection}>
          <div>
            <div className={styles.titleSection}>
              <MapIcon color="action" />
              <h4>Operating Locations</h4>
            </div>
            <div>
              {operating_locations.map((location) => {
                return <p className={styles.contentSection}>{location}</p>;
              })}
            </div>
          </div>
          <div>
            <div className={styles.titleSection}>
              <CorporateFareIcon color="action" />
              <h4>Headquarters</h4>
            </div>
            <div>
              {headquarters.map((headquarter) => {
                return <p className={styles.contentSection}>{headquarter}</p>;
              })}
            </div>
          </div>
          <div>
            <div className={styles.titleSection}>
              <WorkIcon color="action" />
              <h4>Sectors</h4>
            </div>
            <div>
              {sectors.map((sector) => {
                return <p className={styles.contentSection}>{sector}</p>;
              })}
            </div>
          </div>
        </div>
      </section>
      <Button variant="outlined" onClick={() => markAsInteresting(id)}>
        <CheckCircleOutlineIcon /> I'm interested
      </Button>
    </div>
  );
};

export default CompanyCard;
