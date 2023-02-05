import Switch from "../../shared/components/Switch";

const Home = () => {
  return (
    <div className="home_page">
      <Switch
        // label="active"
        value={true}
        onChange={(value) => console.log(value)}
      />
      {/* <div className="hero_section">
        <Carosel images={[img1, img2, img]} />
      </div> */}
      Home Page
    </div>
  );
};

export default Home;
