import React from 'react';

// styles
import styles from '../styles/NotificationCard.module.css';

// interfaces
import { INotificationCard } from '../interfaces/notification';

const NotificationCard = ({ text, type }: INotificationCard) => {
  return <div className={`${styles.notificationCard} ${styles[type]}`}>{text}</div>;
};

export default NotificationCard;
