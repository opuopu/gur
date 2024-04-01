import profile from "../../assets/users/user.png";
import ProfileForm from "../../component/ProfileForm";
const Profile = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex items-center  gap-x-4 text-white ">
          <img
            src={profile}
            alt=""
            className="rounded-full h-[200px] w-[200px] object-cover"
          />
          <h1 className="text-40 font-600">James Mitchell</h1>
        </div>
        <div className="w-[800px]">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
