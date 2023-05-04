import React, { useEffect, useState } from "react";
import Chefs from "./Provider/pages/chefs/Chefs";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black">
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url('/src/assets/banner-2.jpg')" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Chefs Quest</h1>
              <p className="mb-5">
                Join the ultimate culinary adventure - where top chefs take on
                the wild to source the freshest, most flavorful ingredients.
                Follow their journey as they hunt for the perfect dish!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black mt-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-3  container mx-auto gap-2">
        {
          chefs.map(chef => <Chefs
          key= {chef.id}
          chef={chef}>

          </Chefs>)
        }
        </div>
<div>

<Marquee  className="mt-8 bg-purple-900 p-4">
<div className="w-64 mx-12"><img src="https://th.bing.com/th/id/R.3102fc240b584dcef15c0336de677474?rik=fYsjbfX%2f9dGceA&pid=ImgRaw&r=0" alt="" /></div>
<div className="w-64 mx-12"><img src="https://d37b3blifa5mva.cloudfront.net/000_clients/127056/page/127056Drgxqz3h.jpg" alt="" /></div>
<div className="w-64 mx-12"><img src="https://images.pexels.com/photos/1026691/pexels-photo-1026691.jpeg?cs=srgb&dl=curry-delicious-food-delicious-indian-food-indian-cuisine-1026691.jpg&fm=jpg" alt="" /></div>
</Marquee>
</div>

<div className="text-center">

<p className="text-2xl font-bold"> About Us</p>
  <p className="text-xl text-gray-500">
  Our website features a wide variety of recipes ranging from traditional classics to innovative, contemporary <br /> dishes. Whether you're a seasoned home cook or just starting out, our step-by-step tutorials <br /> You will get All chefs details here. Thank You.
  </p>
</div>

      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
