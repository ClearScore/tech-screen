import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from '../utils/bem';

import './mainLayout.scss';

const cn = bemHelper({ block: 'layout' });

const MainLayout = ({ children }) => (
  <div className={cn(null, 'main')}>
    <nav className={cn('nav')} />
    <main className={cn('content')}>{children}</main>
    <footer className={cn('footer')} />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
