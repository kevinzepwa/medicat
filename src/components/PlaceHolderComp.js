import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Placeholder from 'react-bootstrap/Placeholder';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Footer from "./Footer";

function PlaceHolderComp( { data, imgPlaceholder } ) {
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

export default PlaceHolderComp;