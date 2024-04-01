import { ConfigProvider, Layout } from "antd";

import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderLayout from "./HeaderLayout";
import { useAppSelector } from "../redux/hooks";
import { sidebardThemes } from "../themes/sidebarThemes";
import { paginationTheme } from "../themes/paginationThemes";

const MainLayout = () => {
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  return (
    <div>
      <ConfigProvider theme={sidebardThemes}>
        <Layout style={{ height: "100%" }}>
          <Sidebar />
          <Layout>
            <Header className="sticky top-0 z-50 w-full bg-gray-800">
              <HeaderLayout />
            </Header>
            <ConfigProvider theme={paginationTheme}>
              <Content
                style={{ padding: "24px 16px 0", backgroundColor: "#222222" }}
                className={`responsive-content ${
                  !collapsed ? "collapsed" : ""
                }`}
              >
                <div
                  style={{
                    padding: 24,
                    backgroundColor: "#222222",
                  }}
                >
                  <Outlet />
                </div>
              </Content>
            </ConfigProvider>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default MainLayout;
