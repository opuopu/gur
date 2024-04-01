import { Button } from "antd";
import { inputTheme } from "../../themes/inputThemes";
import GuruForm from "../../component/Form/FormProvider";
import GuruInput from "../../component/Form/GuruInput";
import { NavLink } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { GiConfirmed } from "react-icons/gi";

interface SubmitProps {
  currentPassword: string;
  newPassword: string;
  oldPassword: string;
}
const ChangePasswordFrom = () => {
  const onSubmit = async (data: SubmitProps) => {
    console.log(data);
  };
  return (
    <div className="flex  items-center justify-center h-[80vh]">
      <div className="w-[800px] text-white">
        <div className="flex items-center gap-x-2 mb-4">
          <NavLink to="/setting">
            <LeftOutlined
              style={{
                backgroundColor: "#F67E2F",
                padding: "12px",
                borderRadius: "50%",
              }}
            />
          </NavLink>
          <h1 className="font-600 text-32 text-orange ">
            Change Your Password
          </h1>
        </div>
        <GuruForm onSubmit={onSubmit} theme={inputTheme}>
          <GuruInput
            labelColor="white"
            label="Current Password"
            type="password"
            name="currentPassword"
            placeholder="enter your current password"
          />
          <GuruInput
            labelColor="white"
            label="Current Password"
            type="password"
            name="currentPassword"
            placeholder="enter your current password"
          />
          <GuruInput
            labelColor="white"
            label="Current Password"
            type="password"
            name="currentPassword"
            placeholder="enter your current password"
          />
          <NavLink to="/otp">
            <p className="text-linen text-end text-18 mb-4 font-600">
              Fogot Password
            </p>
          </NavLink>
          <Button
            className="bg-orange w-full flex justify-center items-center font-600 text-18 border-0"
            icon={<GiConfirmed />}
          >
            Confirm
          </Button>
        </GuruForm>
      </div>
    </div>
  );
};

export default ChangePasswordFrom;
