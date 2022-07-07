import { Col, Row,Card ,Button,Avatar,Image } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; 
import '../Cards/Card.css'

type cardDetailstype={
  title:string
  description:string
  content1:string
  content2:string
}
const Cards = (props:cardDetailstype) => (
    
 <Row>
    <Col xs={24} sm={24} md={24} lg={12} xl={8} >
    <div className="site-card-border-less-wrapper " style={{borderRadius:'10px'}}>
    <Card  style={{ width: 320 }} bodyStyle={{borderRadius:'10px'}}  className='card-widt'>
      <div style={{display:'flex'}} className='card-one'>
      <div style={{marginRight:'30px'}}>
     {<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className='avatar'/>}
     
      </div>
      <div className='beforeHover'>
      <span className='title'>{props.title}</span><br></br>
     <span className='description'> {props.description}</span><br></br>
      <br></br>
      <p className='content1' style={{marginRight:'20px',marginTop:'-9px',color:'#5C83B1'}}>{props.content1}</p>
      </div>
      
      </div> 
       <div className='hover-content' >
        <span className='hover-para'>{props.content2}</span><br></br>
        <Button type="primary">View Details</Button>
      </div> 
    </Card>
   </div>
    </Col>
  </Row>
);

export default Cards;