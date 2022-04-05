import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';
import {Row,Col,Card,CardColumns,CardImg,CardBody,CardTitle,CardText,Button} from 'reactstrap'
function Users() {
    const [state,setState]=React.useState();

  const getUsers=React.useCallback(()=>{
   axios.get("https://624b19f544505084bc4c3472.mockapi.io/users")
   .then(({data})=>setState(data))
  },[])

  React.useEffect(()=>{
    getUsers();
   },[])

   const history = useHistory();
    const handleClickDetail = React.useCallback((id)=>{
    history.push(`/detail/${id}`, {id})
    },[])
  return (
      <CardColumns>
          <Row>
            {state?.map((user)=>(
                <Col xs={3} key={user.id}>
                    <Card >
                        <CardImg
                        alt="Card image cap"
                        src={user.Image}
                        top
                        width="100%"
                        height="300px"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {user.Fullname}
                        </CardTitle>
                        <CardText>
                            {user.Username}
                        </CardText>
                        <Button onClick={()=>{handleClickDetail(user.id)}} >Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            ))} 
          </Row>
         
    </CardColumns>
  
  )
}

export default Users