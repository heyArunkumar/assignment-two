
import { Layout, Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../Sidenavbar/NavBar.css'
import { UserOutlined, SwapOutlined, AppstoreOutlined, CloudDownloadOutlined, SettingOutlined, QuestionCircleOutlined, NotificationTwoTone, PoweroffOutlined, WarningOutlined } from '@ant-design/icons';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cardmap from '../Cards/Cardmap';
const { Sider, Content } = Layout;


function SiderBar() {
  return (
    <div className='sidenav-sec'>
      <Layout>
        <Sider
          width={70}
          breakpoint="lg"
          collapsedWidth="0"
          className='sidebar'
        >
          <div className='Mainlogo' style={{ marginBottom: "150px" }} >
            <Menu
              className='sidebar mainlogo'
              mode="inline"

              items={[WarningOutlined].map(
                (icon, index) => ({
                  key: String(index + 1),
                  icon: React.createElement(icon),
                }),
              )}
            />
          </div>
          <div className="logo" />
          <Menu
            className='sidebar center-sidebar '
            mode="inline"
            defaultSelectedKeys={['2']}
            items={[AppstoreOutlined, SwapOutlined, CloudDownloadOutlined, SettingOutlined, QuestionCircleOutlined].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
              }),
            )}
          />
          <div className="logo1" style={{ marginTop: "100px", paddingBottom: '45px' }} />
          <Menu
            className='sidebar'
            mode="inline"
            items={[NotificationTwoTone].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
              }),
            )}
          />

          <Avatar size="small" icon={<UserOutlined />} style={{ marginTop: "10px", marginLeft: "20px" }} />

          <Menu
            className='sidebar'
            mode="inline"
            items={[PoweroffOutlined].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
              }),
            )}
          />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          <SearchBar />
          <Cardmap />
        </Content>
      </Layout>
    </div>
  )
}

export default SiderBar;