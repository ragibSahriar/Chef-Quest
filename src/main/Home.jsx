import React, { useEffect, useState } from 'react';

const Home = () => {

  const [datas, setDatas]= useState([]);


      useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res => res.json())
        .then (allData => console.log(allData))
        .catch(err => console.error(err))
      },[])

    return (
        <div>
          {/* banner ////////// */}
          <div>
          <div className="hero min-h-screen" style={{ backgroundImage: "url('/src/assets/banner-2.jpg')" }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Chefs Quest</h1>
      <p className="mb-5">Join the ultimate culinary adventure - where top chefs take on the wild to source the freshest, most flavorful ingredients. Follow their journey as they hunt for the perfect dish!</p>



    </div>
  </div>
</div>
          </div>


        </div>
    );
};

export default Home;