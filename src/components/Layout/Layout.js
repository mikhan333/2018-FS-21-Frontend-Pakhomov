import React from 'react';
import Aux from './Aux'
import classes from './Layout.module.css';
import HeaderLayout from '../Header/Header'
import FooterLayout from '../Footer/Footer'

const layout = ({children}) => (
  <div className={classes.App}>
  <Aux >
      <HeaderLayout />
      <main className={classes.Content}>
        {children}
      </main>
      <FooterLayout />
    </Aux>
  </div>
);
export default layout;