import styles from './sider.module.scss';
import { useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined, EditOutlined, InboxOutlined, TrophyOutlined, BookOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#fff' }}>
        <div className="demo-logo-vertical" style={{ height: 32, margin: 16, background: '#fff' }} />
        <Menu
        className={styles.menu}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <HomeOutlined />, label: "Home" },
            { key: "2", icon: <BookOutlined />, label: "Learn" },
            { key: "3", icon: <TrophyOutlined />, label: "Earn" },
            { key: "4", icon: <EditOutlined />, label: "Hair Journal" },            
            { key: "5", icon: <InboxOutlined />, label: "Products" },
            { key: "6", icon: <UserOutlined />, label: "Account" },
            
          ]}
        />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        
      </Layout>
    </Layout>
  );
};

export default App;
