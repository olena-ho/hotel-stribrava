import React from 'react';
import { Banner } from '../Banner';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';


export const App = () => (
  <>
    <Banner />
    <Outlet />
    <Footer />
  </>
);
