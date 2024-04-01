import userImage from "./../../../assets/users/user.png";
const UserDetails = () => {
  return (
    <div>
      <img
        src={userImage}
        alt=""
        className="mt-5 h-[200px] w-[200px] object-cover mx-auto rounded-[50%] "
      />
      <div className="text-center">
        <h1 className="text-32 font-600 mt-2 text-center text-orange">
          Benjamin Price
        </h1>
        <p className="font-500 text-18">Premium</p>
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        <div className="flex justify-center gap-x-4 text-18">
          <p>User Id:</p>
          <p>bejamien</p>
        </div>

        <div className="flex justify-center gap-x-4 text-18">
          <p>Name:</p>
          <p>bejamien</p>
        </div>
        <div className="flex justify-center gap-x-4 text-18">
          <p>Country:</p>
          <p>America</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
