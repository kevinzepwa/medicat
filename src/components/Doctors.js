import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Placeholder from 'react-bootstrap/Placeholder';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Footer from "./Footer";

function Doctors( {data, booked, setBooked, url_2, imgPlaceholder} ) {
    // console.log(data[0].available.time)
    const [ timing, setTiming ] = useState(true)
    // const [ booked, setBooked ] = useState([])

    setTimeout((timing) => setTiming(false), 2000);

    if (timing === true) {
      return (
        <>
        <Container fluid="md" className='mainContainer'>
         <Row className="justify-content-md-center">
          { data.map(data => ( 
              // console.log(">>>>>", data)
          <Card className='doctorcard'>
            <>
              <Card.Header>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </Card.Header>
              <Card.Img variant="top" src={imgPlaceholder} />
              <Card.Body>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
              <Card.Body>
              <Stack direction="horizontal" gap={2}>
                {data.available.map(d => 
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




    const handleClick = e => {
      const filteredBooking = data.filter(d => {
        return (d.id == e.currentTarget.value)
      })

      //const bookingData = { id, img, role };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filteredBooking)
      };
      fetch(url_2, requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));  
    };

    return (
      <>
      <Container fluid="md" className='mainContainer'>
       <Row className="justify-content-md-center">
        { data.map(data => ( 
            // console.log(">>>>>", data)
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