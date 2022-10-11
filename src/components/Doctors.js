import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PlaceHolderComp from './PlaceHolderComp';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Footer from "./Footer";

function Doctors( {data, booked, setBooked, url_2, imgPlaceholder} ) {
    const [ timing, setTiming ] = useState(true)

    setTimeout((timing) => setTiming(false), 2000);

    if (timing === true) {
      return (
      <PlaceHolderComp data={data} imgPlaceholder={imgPlaceholder} />
    )};

    const handleClick = e => {
      const filteredBooking = data.filter(d => {
        return ((d.id.toString() === e.currentTarget.value.toString()))
      })
      setBooked(filteredBooking)
    };

    // const handleClick = e => {
    //   const bookedItem = booked.filter(d => {
    //     return ((d.id != e.currentTarget.value))
    //   })
    //   setBooked(bookedItem) 
    //   console.log(bookedItem)
    // };

    return (
      <>
      <Container fluid="md" className='mainContainer'>
       <Row className="justify-content-md-center">
        { data.map(data => ( 
        <Card className='doctorcard'>
          <>
            <Card.Header>
              <Card.Title>{data.name}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={data.img} className="cardimage" />
            <Card.Body>
              <Card.Text>
                Dr {data.firstName} {data.lastName} is the best {data.role} practitioner in {data.city}. Book an appointment for the available times below.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Stack direction="horizontal" gap={2}>
              {data.available.map(d => 
                (<ListGroupItem as="a" variant="success">
                  <Button gap={1} onClick={handleClick} value={data.id}>
                    {d.day} {d.time}, {d.month} {d.year}
                  </Button>
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

export default Doctors;