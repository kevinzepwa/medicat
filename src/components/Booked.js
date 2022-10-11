import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Placeholder from 'react-bootstrap/Placeholder';
import Footer from "./Footer";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function Booked( {data, booked} ) {
    // console.log(data[0].available.time)
    const [ timing, setTiming ] = useState(true)
    // console.log(booked)

    setTimeout((timing) => setTiming(false), 3000);

    if (timing === true) {
      return (
      <>
        <Container fluid="md" className='mainContainer'>
         <Row className="justify-content-md-center">
          { booked.map(item => ( 
              // console.log(">>>>>", data)
          <Card className='doctorcard'>
            <>
              <Card.Header>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/300.png/09f/fffC/O%20https://placeholder.com/" />
              <Card.Body>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
              <Card.Body>
              <Stack direction="horizontal" gap={2}>
                {item.available.map(d => 
                  (<ListGroupItem as="a" variant="success">
                    <Placeholder.Button variant="primary" xs={6} />
                  </ListGroupItem>)
                )}
              </Stack>
              </Card.Body>
            </>
          </Card>
          ))}
         </Row>
        </Container>
      <Footer />
    </>
    );
  }

    function handleClick() {
      console.log(timing)
    }

    return (
      <>
      <Container fluid="md" className='mainContainer'>
       <Row className="justify-content-md-center">
        { booked.map(item => ( 
            // console.log(">>>>>", booked)
        <Card className='doctorcard'>
          <>
            <Card.Header>
              <Card.Title>{item.name}</Card.Title>
            </Card.Header>
            <Card.Img className="cardimage" variant="top" src={item.img} />
            <Card.Body>
              <Card.Text>
                Dr {item.firstName} {item.lastName} is the best {item.role} practitioner in {item.city}. Book an appointment for the available times below.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button variant="danger" gap={1} onClick={handleClick}>
                Cancel appointment
              </Button>
            </Card.Body>
          </>

        </Card>
        ))}
       </Row>
      </Container>
    <Footer />
    </>
  );
}

export default Booked;