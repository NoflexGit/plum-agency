import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-rasta';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/TicketsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import { AppWrapper, HeaderWrapper, Header } from './styles';


const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - Plum Event Agency"
      defaultTitle="Plum Event Agency"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <HeaderWrapper>
      <Container>
        <Header />
      </Container>
    </HeaderWrapper>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tickets" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default App;
