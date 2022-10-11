import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PlaceHolderComp from './PlaceHolderComp';
import Footer from "./Footer";

function Booked( {booked, url_2, setBooked, data, imgPlaceholder} ) {
    const [ timing, setTiming ] = useState(true)

    setTimeout((timing) => setTiming(false), 3000);

    if (timing === true) {
      return (
        <PlaceHolderComp data={data} imgPlaceholder={imgPlaceholder} />
    )};


    const handleDelete = e => {
      const deletedBooking = booked.filter(d => {
        return ((d.id == e.currentTarget.value))
      })
      setBooked(deletedBooking) //!!

      // // const bookingData = { id, img, role };
      // const requestOptions = {
      //   method: "DELETE",
      //   // headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(deletedBooking)
      // };
      // fetch(url_2, requestOptions)
      // .then(response => response.json())
      // .then(res => console.log(res));  
    };

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
              <Button variant="danger" gap={1} onClick={handleDelete} value={item.id}>
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