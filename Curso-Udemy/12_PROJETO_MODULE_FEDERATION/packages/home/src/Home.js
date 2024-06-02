import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h1 className="display-3">Olá Module Federation</h1>
          <hr className='my-2'/>
          <p>Este componente é de outro App!</p>
          <p className="lead">
            <Button color="primary">Botão</Button>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home;