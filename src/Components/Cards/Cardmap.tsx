import React from 'react'
import Cards from './Card'
import details from '../Data/Data'
import '../Cards/Card.css'
// import { Col, Row} from 'antd';

const Cardmap = () => {
  return (
    <div className='Cards' >
{/*      
    <Row>
      <Col xs={8} sm={8} md={8} lg={8} xl={8} > */}
      {details.map((card, id) => {
        console.log(card.title)
        return (
          <div className='parentContainer' >
            <Cards 
              title={card.title}
              description={card.description}
              content1={card.content1}
              content2={card.content2}
            />
          </div>
        )
      })}
      {/* </Col>
    
    </Row> */}
    
    </div>
  )
}

export default Cardmap