import React, { useEffect, useState } from "react";
import Chefs from "./Provider/pages/chefs/Chefs";
// import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chefs-quest-server-seebsk9-gmailcom.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black">
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url('https://th.bing.com/th/id/R.1dde3237df83c2b982dc189ad378904a?rik=kXvnHjeqeCu%2bTA&pid=ImgRaw&r=0" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Chefs Quest</h1>
              <p className="mb-5">
                Meet all the Italian Best chefs out there!!
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

<Marquee  className="mt-8 bg-slate-900 p-4">
<div className="w-64 mx-12"><img src="https://th.bing.com/th/id/R.3102fc240b584dcef15c0336de677474?rik=fYsjbfX%2f9dGceA&pid=ImgRaw&r=0" alt="" /></div>
<div className="w-64 mx-12"><img src="https://d37b3blifa5mva.cloudfront.net/000_clients/127056/page/127056Drgxqz3h.jpg" alt="" /></div>
<div className="w-64 mx-12"><img src="https://images.pexels.com/photos/1026691/pexels-photo-1026691.jpeg?cs=srgb&dl=curry-delicious-food-delicious-indian-food-indian-cuisine-1026691.jpg&fm=jpg" alt="" /></div>
</Marquee>
</div>

<div className="text-center p-6">

<p className="text-2xl text-white font-bold"> About Us</p>
  <p className="text-xl text-gray-500">
  Our website features a wide variety of Italian recipes ranging from traditional classics to innovative, contemporary <br /> dishes. Whether you're a seasoned home cook or just starting out, our step-by-step tutorials <br /> You will get All chefs details here. Thank You.
  </p>
</div>
      </div>
    </div>
  );
};

export default Home;
