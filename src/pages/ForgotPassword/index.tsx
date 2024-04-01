/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from "@hookform/resolvers/zod";
import GuruForm from "../../component/Form/FormProvider";
import image from "./../../assets/image.png";
import { fogotpasswordSchema } from "../../schema/auth.schema";
import GuruInput from "../../component/Form/GuruInput";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

interface FieldValues {
  email: string;
}

const ForgotPassword = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    Swal.fire({
      // position: "top-end",

      icon: "success",
      title: "An Email Sent Successfull To Your Email",
      text: "An Email Sent Successfull To Your Email",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[490px] h-[430px]  bg-white px-4 rounded">
          <div className=" mt-8 ">
            <NavLink to="/login">
              <LeftOutlined
                style={{
                  backgroundColor: "#CCCCCC",
                  padding: "12px",
                  borderRadius: "50%",
                }}
              />
            </NavLink>
            <h1 className="text-orange text-32 font-600 mt-2">Email</h1>
            <p className="text-20">
              Enter your email address to ger a verification code for resetting
              your password.
            </p>
          </div>
          <div className="mt-[25px]">
            <GuruForm
              onSubmit={onSubmit}
              resolver={zodResolver(fogotpasswordSchema)}
            >
              <GuruInput
                size="large"
                type="email"
                name="email"
                label="Email"
                placeholder="enter your gmail"
              />
              <Button
                className="w-full mt-[50px]    text-18 font-600 h-10 bg-orange"
                htmlType="submit"
              >
                Get OTP
              </Button>
            </GuruForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
