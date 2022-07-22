import { Layout, Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../Sidenavbar/NavBar.css'
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
const { Sider, Content } = Layout;
import Cards from '../Cards/Card';

import L1 from '../img/L1.svg';
import L2 from '../img/L2.svg';
import L3 from '../img/L3.svg';
import L4 from '../img/L4.svg';
import L5 from '../img/L5.svg';
import L6 from '../img/L6.svg';
import L7 from '../img/L7.svg';
import L8 from '../img/L8.svg';
import L9 from '../img/L9.svg';

function SiderBar() {
  const [cardData, setCardData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("SS")
    let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail')}`);
    setCardData(employeeDetail)
    setLoading(false)
  }, [loading])

  const refresh = () => {
    setLoading(true)
  }
  return (
    <div className='sidenav-sec'>
      <Layout>
        <Sider className="NavBar"
          width={70}
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="Logo">
            <img src={L1} />
          </div>
          <Menu

            theme="light"
            mode="inline"
            defaultSelectedKeys={["2"]}
            className="middleIcon"
            style={{ marginTop: "120px" }}
          >
            <Menu.Item>
              <img src={L2} />
            </Menu.Item>
            <Menu.Item>
              <img src={L3} />
            </Menu.Item>
            <Menu.Item>
              <img src={L4} className="one" />
            </Menu.Item>
            <Menu.Item>
              <img src={L5} />
            </Menu.Item>
            <Menu.Item>
              <img src={L6} />
            </Menu.Item>
          </Menu>

          <div className="bottomIcon">
            <img src={L7} width={25} />
            <img src={L8} width={50} style={{ marginLeft: '-12px' }} />
            <img src={L9} width={25} />
          </div>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          <SearchBar refresh={refresh} />
          <div className='Cards' >
            {cardData.map((card: any, index) => {

              return (
                <div className='parentContainer' key={index} >
                  <Cards
                    index={index}
                    name={card.name}
                    designation={card.designation}
                    Employee_details={card.Employee_details}
                    refresh={refresh}
                    id={card.id}
                  // description={card.description}
                  // content1={card.content1}
                  // content2={card.content2}
                  />
                </div>
              )
            })}

          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default SiderBar;