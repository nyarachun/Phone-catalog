import React from 'react';
import styles from './RightsPage.module.scss';

export const RightsPage: React.FC = () => {
  return (
    <main className={styles.rights}>
      <h1 className={styles.rights__title}>Rights</h1>

      <p className={styles.rights__text}>
        All rights reserved. Product names, images, and trademarks belong to
        their respective owners.
      </p>
    </main>
  );
};
