import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import PortfoliosView from '../components/PortfoliosView';

function Portfolios() {
  const [portfolios, setPortfoios] = useState([]);

  useEffect(() => {
    document.title = 'Ashley Pean - Portfolio';
  });

  useEffect(() => {
    let mounted = true;
    axios.get('/api/portfolios').then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => {
      mounted = false;
    };
  }, [portfolios]);

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolio" />
          <PortfoliosView portfolios={portfolios} />
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
