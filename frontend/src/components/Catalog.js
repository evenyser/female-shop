import React, { useEffect, useState } from 'react';
import {Container, Row, Col, ListGroup, Card, Button} from "react-bootstrap";

 function Catalog()  {
      
    const [catalog, setCatalog]= useState([])
       useEffect(()=>{
           console.log('Run')
           fetch('http://localhost:8000/catalog')    
            .then(res => res.json())    
            .then(data => setCatalog(data))
       }, [])
    return (
        <Container className='py-4'>
            <Row>
                <Col xs={3}>
                    <ListGroup variant="flush">
                     <ListGroup.Item>Dresses</ListGroup.Item>
                     <ListGroup.Item>sweaters</ListGroup.Item>
                     <ListGroup.Item>jeans</ListGroup.Item>
                     <ListGroup.Item>underwear</ListGroup.Item>
                    </ListGroup>
                
                </Col>
                
                <Col xs={9}>
                <Row>
                    {
                        catalog.map(el => (
                            <Col xs={4}>
                                <Card className="mb-3">
                                  <Card.Img variant="top" src={el.image}/>
                                    <Card.Body>
                                      <Card.Title>{el.name}</Card.Title>
                                       <Card.Text className="d-flex justify-content-between aling-center">
                                        <span>Price:</span>
                                        <span>{el.price}</span>
                                        </Card.Text>
                                        <Button variant="primary">description</Button>
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                               
                        ))
                    }

                    </Row>
              </Col>
              
               
            </Row>
       </Container>
    )
}

export default Catalog;