import React from 'react'
import { Col,Container,Row,Card } from 'react-bootstrap'
import { CardBody, CardHeader } from 'reactstrap'
function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Hello World!</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Home