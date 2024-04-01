import UpdatePasswordForm from "../../component/UpdatePasswordForm";

const UpdatePassword = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="w-[800px]">
        <div>
          <div>
            <h1 className="text-orange text-32">Update Password</h1>
            <p className="text-18 text-white my-2">
              To update your password, check email for OTP sent. Enter it in
              designated field to complete reset process.
            </p>
          </div>
          <UpdatePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
