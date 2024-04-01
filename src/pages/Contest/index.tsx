/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ConfigProvider } from "antd";
import GuruTable from "../../component/Table";
import { GoPlusCircle } from "react-icons/go";

import { contestData } from "../../db/contestData";
import { contestTableTheme } from "../../themes/tableThemes";
import { buttonTheme } from "../../themes/buttonTheme";
import { NavLink } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

const Contest = () => {
  const contestColumns = [
    {
      title: "#Sl",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Contest ID",
      dataIndex: "contestID",
      key: "contestID",
    },
    {
      title: "Contest Name",
      dataIndex: "contestName",
      key: "contestName",
    },
    {
      title: "Contest By",
      dataIndex: "contestBy",
      key: "contestBy",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (data: any, index: number) => {
        return (
          <NavLink to={`/contest-details/${1}`}>
            <EyeOutlined className="cursor-pointer" key={index} />
          </NavLink>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex justify-end mb-4">
        <ConfigProvider theme={buttonTheme}>
          <NavLink to="/create-contest">
            <Button
              className="bg-orange border-0 font-600 flex items-center h-[40px]"
              icon={<GoPlusCircle />}
            >
              Create Contest
            </Button>
          </NavLink>
        </ConfigProvider>
      </div>
      <div>
        <GuruTable
          loading={false}
          column={contestColumns}
          data={contestData}
          theme={contestTableTheme}
          pagination={{
            total: contestData?.length,
            pageSize: 10,
          }}
        />
      </div>
    </div>
  );
};

export default Contest;
