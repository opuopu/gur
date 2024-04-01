import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SidebarItems } from "./SidebarItems";
import logo from "../assets/image-logo.png";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      // collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        backgroundColor: "#595959",
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" />
      </div>
      <Menu
        style={{
          backgroundColor: "#595959",
          marginTop: "10px",
        }}
        // theme="dark"
        // mode="inline"
        // selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        items={SidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
