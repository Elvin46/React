import React from 'react'
import {Card,CardColumns,CardImg,CardBody,CardTitle,CardText,Button, Col, Row} from 'reactstrap'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Detail() {
    const {state} = useLocation();
    const [getState,setState]=React.useState([]);
    const getUser=React.useCallback(()=>{
        axios.get(`https://624b19f544505084bc4c3472.mockapi.io/users/?id=${state.id}`)
        .then(({data})=>setState(data))
       },[])
     
       React.useEffect(()=>{
         getUser();
        },[])
        console.log(getState);
  return (
    <CardColumns>
        <Row>
            {getState?.map((user)=>(
                    <Col xs={4}>
                        <Card key={user.id}>
                        <CardImg
                        alt="Card image cap"
                        src={user.Image}
                        top
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {user.Username}
                        </CardTitle>
                        <CardText>
                            {user.Fullname}
                        </CardText>
                        </CardBody>
                        </Card>
                    </Col>
            ))}
        </Row>
        
  </CardColumns>
  
  )
}

export default Detail