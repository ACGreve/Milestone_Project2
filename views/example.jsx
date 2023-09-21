const React = require('react')
const Bootstrap = require("react-bootstrap");
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Example() {
  return (
    <div>
      <link rel="stylesheet" href="/css/bootstrap.min.css"></link>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/carousel.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

module.exports = Example;