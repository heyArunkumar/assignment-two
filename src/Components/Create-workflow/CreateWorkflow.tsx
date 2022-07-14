import { Button, Modal, Input,Form ,Row,Col} from 'antd';
import { json } from 'body-parser';
import { type } from 'os';
import React, { useState,useEffect } from 'react';
import '../Create-workflow/CreateWorkflow.css'
import img from '../img/logo1.jpg'
import ImageSelector from './Image-selector';

const { TextArea } = Input;

type message = {
    Employee_name: any,
    designation: any,
    Employee_details: any,
    
}
const CreateWorkflow = ({ Employee_name, designation, Employee_details }: message) => {
   
    const [modal2Visible, setModal2Visible] = useState(false);
    const [employeeName, setEmployeeName] = useState('');
    const [designationVal, setDesignationVal] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState('');
   

    const submitButton = () =>{
        
        let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
        
        let payload:any ={
            name:employeeName,
            designation:designationVal,
            Employee_details:employeeDetails
        }
        employeeDetail.push(payload)
        console.log(employeeDetail)
        localStorage.setItem('employeeDetail', JSON.stringify(employeeDetail));
     
       setEmployeeName('');
       setDesignationVal('');
       setEmployeeDetails(' ');
       setModal2Visible(false)
    }
    
       const handleCancel = () => {
          setModal2Visible(false);
       };

    return (
        <>
            <Button type="primary" onClick={() => setModal2Visible(true)}>
                Create worflow
            </Button>
            <Modal
                title="Setup Employee"
                centered
                width={560}
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
                footer={null}
             >
                 <Row>
                 <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                 <ImageSelector/>
                 </Col>
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
                        style={{ display: 'flex',justifyContent:'space-around' }}>
                        <div className='employee-details'>
                            <p  style={{marginTop:'-17px'}} >Employee Name</p>
                            <p  style={{marginTop:'25px'}} >Designation</p>
                            <p  style={{marginTop:'30px'}} >Employee Details </p>
                       </div>
                    <div>
                        <Form.Item
                         name="Employee_name" 
                         rules={[{ required: true, message: 'The field required!' }]}
                         >
                        <Input 
                        className='input'
                        name="Employee_name" 
                        value={employeeName}
                        onChange={(value)=>setEmployeeName(value.target.value)}
                        />
                        </Form.Item>
                   
                        <Form.Item
                         name="designation" 
                         rules={[{ required: true, message: 'The field required!' }]}
                         >
                        <Input 
                        className='input'
                        size='large'
                        style={{ marginTop:'0px' }}
                        name="designation"
                        value={designationVal}
                        onChange={(value)=>setDesignationVal(value.target.value)}
                        />
                        </Form.Item>

                        <TextArea rows={4} 
                         className="textarea"
                         name="Employee_details" 
                         value={employeeDetails}
                         onChange={(value)=>setEmployeeDetails(value.target.value)}
                        />
                        </div>
                     </div>
                 </div>
              
                <Button 
                style={{ border: '1px solid #2B78D4' }} 
                className='cancelBtn'
                 onClick={handleCancel}
                >Cancel</Button>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button 
                 type="primary"
                 htmlType="submit" 
                 className='saveBtn' 
                 onClick={submitButton}>
                 Save
                  </Button>
                </Form.Item>
                </Form>
                </Col>
              </Row>
            </Modal>
        </>
    );
};

export default CreateWorkflow;