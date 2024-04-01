/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import GuruInput from "../Form/GuruInput";
import GuruForm from "../Form/FormProvider";
import { GiConfirmed } from "react-icons/gi";
import { inputTheme } from "../../themes/inputThemes";

interface SubmitProps {
  newPassword: string;
  confirmPassword: string;
}
const UpdatePasswordForm = () => {
  const onSubmit = async (data: SubmitProps) => {
    console.log(data);
  };
  return (
    <div>
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
          name="confirmPassword"
          placeholder="enter your current password"
        />

        <Button
          className="bg-orange w-full flex justify-center items-center font-600 text-18 border-0"
          icon={<GiConfirmed />}
        >
          Confirm
        </Button>
      </GuruForm>
    </div>
  );
};

export default UpdatePasswordForm;
