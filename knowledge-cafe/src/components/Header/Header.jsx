import profile from "../../images/profile.png";
const Header = () => {
  return (
    <div className=" py-2 md:py-4 lg:py-6 border-b-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-700 font-bold">
          Knowledge Cafe
        </h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
