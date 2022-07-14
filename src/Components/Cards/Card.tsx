import { Col, Row, Card, Button, Avatar, Image, Input, Modal, Form } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../Cards/Card.css'


const { TextArea } = Input;
type cardDetailstype = {
  img: any
  title: string
  description: string
  content1: string
  content2: string
}
  const Cards = (props: cardDetailstype) => {
         let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail')}`);
       //console.log("fromcard", employeeDetail)
         const [modal2Visible, setModal2Visible] = useState(false);
         const [employeeName, setEmployeeName] = useState('');
         const [designationVal, setDesignationVal] = useState('');
         const [employeeDetails, setEmployeeDetails] = useState('');

  return (
    <>
    <p>{employeeDetail.map((item:any)=>{
        console.log(item.name)
    })}</p>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={8} >
          <div className="site-card-border-less-wrapper " style={{ borderRadius: '10px' }}>
            <Card style={{ width: 320 }} bodyStyle={{ borderRadius: '10px' }} className='card-widt'>
              <div style={{ display: 'flex' }} className='card-one'>
                <div style={{ marginRight: '30px' }}>
                  <img src={props.img} width={40} className='avatar'></img>
                </div>
                <div className='beforeHover'>
                  <span className='title'>{props.title}</span><br></br>
                  <span className='description'> {props.description}</span><br></br>
                  <br></br>
                  <p className='content1' style={{ marginRight: '20px', marginTop: '-9px', color: '#5C83B1' }}>{props.content1}</p>
                </div>

              </div>
              <div className='hover-content' >
                <span className='hover-para'>{props.content2}</span><br></br>
                
                <Button type="primary" className='viewDetails' onClick={() => setModal2Visible(true)}>
                  View Details
                </Button>
                <Button>Delete</Button>
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
                  onCancel={() => setModal2Visible(false)}
                  footer={null}
                >
                  <div style={{ display: 'flex', paddingTop: '20px' }} className='card-one'>
                      <div style={{ marginRight: '30px' }}>
                         <img src={props.img} width={40} className='avatar'></img>
                      </div>
                      <div className='beforeHover'>
                         <span className='title'>{props.title}</span><br></br>
                         <span className='description'> {props.description}</span><br></br>
                          <br></br>
                           <p className='content1' style={{ marginRight: '20px', marginTop: '-9px', color: '#5C83B1' }}>{props.content1}</p>
                       </div>
                  </div>

                  <Row>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off" >
                        <div className='workflow-model'>
                           <div className='model-img'>
 
                          </div>
                          <div className='model-content'
                            style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className='employee-details'>
                              <p style={{ marginTop: '-17px' }}>Employee Name</p>
                              <p style={{ marginTop: '25px' }}>Designation</p>
                              <p style={{ marginTop: '30px' }}>Employee Details </p>
                            </div>
                            <div>

                            <Form.Item
                               name="Employee_name"
                              >
                              <Input
                                className='input'
                                name="Employee_name"
                                value={employeeName}
                                />
                              </Form.Item>

                              <Form.Item
                                name="designation"
                               >
                              <Input
                                className='input'
                                size='large'
                                style={{ marginTop: '0px' }}
                                name="designation"
                                value={designationVal}
                                />
                              </Form.Item>


                              {/* {employeeDetail.map((item:any)=>{ 
                          setEmployeeName(item.name)
                             })} */}
                              <TextArea rows={4}
                                className="textarea"
                                name="Employee_details"
                                value={employeeDetails}
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          style={{ border: '1px solid #2B78D4' }}
                          className='cancelBtn'>
                          Cancel</Button>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                           type="primary"
                           htmlType="submit"
                           className='saveBtn'
                          >
                            Edit
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Modal>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );

}

export default Cards;