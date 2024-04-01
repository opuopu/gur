/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "antd";
import GuruForm from "../../component/Form/FormProvider";
import GuruInput from "../../component/Form/GuruInput";
import image from "./../../assets/image.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../schema/auth.schema";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
interface FieldValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    navigate("/dashboard");
    console.log(data);
    Swal.fire({
      // position: "top-end",
      color: "orange",
      icon: "success",
      title: "Successfully logged in",
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
        <div className="w-[490px] h-[450px]  bg-white px-4 rounded">
          <div>
            <h1 className="text-orange text-32 mt-8  font-600">Welcome</h1>
            <p className="text-20">Please sign in for better experience</p>
          </div>
          <div className="mt-[20px]">
            <GuruForm
              onSubmit={onSubmit}
              resolver={zodResolver(loginValidationSchema)}
            >
              <GuruInput
                size="large"
                type="email"
                name="email"
                label="Email"
                placeholder="enter your gmail"
              />

              <GuruInput
                type="password"
                size="large"
                name="password"
                label="Password"
                placeholder="enter your password"
              />
              <NavLink to="/forgot-password">
                <h5 className="text-18 text-orange text-end font-600 cursor-pointer">
                  Forget Password
                </h5>
              </NavLink>
              <Button
                className="w-full mt-[30px]    text-18 font-600 h-10 bg-orange"
                htmlType="submit"
              >
                Sign In
              </Button>
            </GuruForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
