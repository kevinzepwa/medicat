import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function Doctors( {data} ) {
    // console.log(data[0].available.time)
    return (
      <Container fluid="md" className='mainContainer'>
       <Row className="justify-content-md-center">
        { data.map(data => ( 
            // console.log(">>>>>", data)
        <Card className='doctorcard'>
          <Card.Header>
            <Card.Title>{data.name}</Card.Title>
          </Card.Header>
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <Card.Text>
              Dr {data.firstName} {data.lastName} is the best {data.role} practitioner in {data.city}. Book an appointment for the available times below.
            </Card.Text>
          </Card.Body>
          
          <Card.Body>
          <Stack direction="horizontal" gap={2}>
            {data.available.map(d => 
              (<ListGroupItem as="a" variant="success">
                <Button gap={1}>
                  {/* console.log(available.day) */}
                  {d.day} {d.time}, {d.month} {d.year}
                </Button>
              </ListGroupItem>)
            )}
          </Stack>
          </Card.Body>
        </Card>
        ))}
       </Row>
      </Container>
      );
}

export default Doctors;