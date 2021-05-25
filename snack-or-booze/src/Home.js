import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import {Link} from 'react-router-dom';

function Home({ drinks, snacks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <Link to='/drinks'>
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3>Drinks: {drinks.length}</h3>
            </CardTitle>
          </CardBody>
        </Card>
      </Link>
      <Link to='/snacks'>
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3>Snacks: {snacks.length}</h3>
            </CardTitle>
          </CardBody>
        </Card>
        
      </Link>
    </section>
  );
}

export default Home;
