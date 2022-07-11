import { Col, Row,Input,Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; 
import '../SearchBar/SearchBar.css'
import { SearchOutlined  } from '@ant-design/icons';

const SearchBar = () => (
  <Row>
    <Col xs={24} sm={8} md={8} lg={8} xl={9}>
   <h2 >Workflows</h2>
    </Col>
    <Col xs={24} sm={8} md={8} lg={8} xl={6} style={{textAlign:'center'}}>
    <Input placeholder="Search" prefix={<SearchOutlined />}></Input>
    </Col>

    <Col xs={24} sm={8} md={8} lg={8} xl={9}
     className='button'
      style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'flex-end'
      }}>

    <Button type="primary" >
      Create Workflow
      </Button>
    </Col>
  </Row>
);

export default SearchBar;