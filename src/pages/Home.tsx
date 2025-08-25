import HeroImage from "../assets/employee.avif";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Welcome to Employee Management System</h1>
        <br />
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </>
  );
};

export default Home;
