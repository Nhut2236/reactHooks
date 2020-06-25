import React, { useState, useEffect } from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap';

const BlogDetailsForm = props => {
  const [ currentData, setCurrentData ] = useState(props.currentData)

  useEffect(
    () => {
        setCurrentData(props.currentData)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target
    setCurrentData({ ...currentData, [name]: value })
  }

  const redirectTo = (path) => {
    window.location.href = path;
  }
  
  const avatarStyle = {
    width: '200px',
  };

  const saveBlog = () => {
    saveDataApi();
  }

  const saveDataApi = async () => {
    const apiPath = `https://reqres.in/api/users/${currentData.id}`;
    const response = await fetch(apiPath, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(currentData)
      }).then(response => {
        response.json().then(data =>{
            console.log(data);
        })
      });
}
 

  return (
    <div>
      <div>
        <Row>
          <Col xs={{ span: 3, offset: 2 }} md={{ span: 8, offset: 4 }}>
            <Image src={currentData.avatar} roundedCircle style={avatarStyle} />
          </Col>
        </Row>
        <br />
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={currentData.first_name}
          onChange={handleInputChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={currentData.last_name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={currentData.email}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="text-right">
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => redirectTo("/blog")}
        >
          {" "}
          <i className="fa fa-chevron-left mr-2" />
          Quay lại
        </Button>
        <Button variant="primary" onClick={() => saveBlog(currentData)}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default BlogDetailsForm
