import { MenuOutlined } from "@ant-design/icons";
import { IoIosNotifications } from "react-icons/io";
import user from "../assets/users/user.png";
import { useAppDispatch } from "../redux/hooks";
import { Button } from "antd";
import { setCollapsed } from "../redux/features/layout/layoutSlice";
import { NavLink, useLocation } from "react-router-dom";
const HeaderLayout = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => dispatch(setCollapsed())}
          style={{
            fontSize: "16px",
            width: 45,
            height: 45,
            marginRight: "10px",
          }}
        />
        <h1 className="text-white text-20">
          {pathname
            .split(/[/ -]/)
            .map((part) => part.toUpperCase())
            .join(" ")}
        </h1>
      </div>
      <div className="flex items-center  gap-x-6">
        <IoIosNotifications className="text-white  text-32 cursor-pointer" />
        <NavLink to="/profile">
          <img
            src={user}
            width={40}
            className="rounded-full object-cover"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderLayout;
