import { LeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import OtpForm from "../../component/OtpForm";

const Otp = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] overflow-hidden">
      <div className="w-[800px]  ">
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
          <h1 className="font-600 text-32 text-orange ">Submit Your Otp</h1>
        </div>
        <p className="text-white text-18 mb-4">
          We have sent you an OTP to your email address. Please check it and
          place the otp for resetting password
        </p>
        <OtpForm />
      </div>
    </div>
  );
};

export default Otp;
