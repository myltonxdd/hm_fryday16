import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card() {

    function fryday(){
        alert("Es viernes y el cuerpo lo Sabe")
    }
  return (
    <div className='d-flex flex-column align-items-center p-5'>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button onClick={fryday} variant="primary">Click</Button>
            </Card.Body>
        </Card>

    </div>
  )
}

export default card