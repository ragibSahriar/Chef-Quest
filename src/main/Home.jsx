import React, { useEffect, useState } from "react";
import Chefs from "./Provider/pages/chefs/Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* banner ////////// */}
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
      <div>
        <h4>All chefs {chefs.length}</h4>
        <div className="grid lg:grid-cols-3 md:grid-cols-3  container mx-auto gap-2">
        {
          chefs.map(chef => <Chefs
          key= {chef.id}
          chef={chef}>

          </Chefs>)
        }
        </div>
      </div>
    </div>
  );
};

export default Home;
