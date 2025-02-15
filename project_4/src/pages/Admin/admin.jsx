import {
    AppstoreOutlined,
    MailOutlined,
  } from "@ant-design/icons";
  import { Layout, Menu } from "antd";
  import "./homeadmin.scss";
  import { Link, Outlet } from "react-router-dom";
  const { Header, Sider, Content } = Layout;
  
  function HomeAdmin() {
    const items = [
      {
        key: "sub1",
        label: "Trang Chủ",
        icon: <MailOutlined />,
        path: "/admin",
      },
      {
        key: "sub2",
        label: "Khách Hàng",
        icon: <AppstoreOutlined />,
        path: "user",
      },
      {
        key: "sub3",
        label: "Nhân Viên",
        icon: <AppstoreOutlined />,
        path: "staff",
      },
      {
        key: "sub4",
        label: "Đơn Hàng",
        icon: <AppstoreOutlined />,
        path: "order",
      },
      {
        key: "sub5",
        label: "Danh Mục",
        icon: <AppstoreOutlined />,
        path: "category",
      },
      {
        key: "sub6",
        label: "Sản Phẩm",
        icon: <AppstoreOutlined />,
        path: "product",
      },
      {
        key: "sub7",
        label: "Sản Phẩm Bán Chạy",
        icon: <AppstoreOutlined />,
        path: "product-best-sell",
      },
      {
        key: "sub8",
        label: "Hàng Tồn Kho",
        icon: <AppstoreOutlined />,
        path: "inventory",
      },
    ];
    const onClick = (e) => {
      console.log("click ", e);
    };
    return (
      <>
        <Layout className="layout">
          <Header className="layout__header">
            <div className="title">APPLESHOP</div>
          </Header>
          <Layout className="layout__middle">
            <Sider className="layout__sider">
              <Menu
                onClick={onClick}
                mode="inline"
              >
                
                {items.map((item) => (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Content className="layout__content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
  
  export default HomeAdmin;
  