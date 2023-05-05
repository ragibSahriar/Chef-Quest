import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import { ClimbingBoxLoader } from 'react-spinners';
// import Recipe from './Recipe';



const Chef = () => {

  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
  setLoading(true);
  setTimeout(()=>{
  setLoading(false);
  }, 3000)
  },[])

  // className="flex items-center justify-center h-screen"

const {id} = useParams();
const chef = useLoaderData();
console.log(chef.recipes);
    return (
      <div >
      <div>

       <div>
      <div>
         {
          loading ? (

        <div  className="flex items-center justify-center h-screen" >
            <ClimbingBoxLoader 

color={"#1cd5b0"}
loading={loading}
size={40}
aria-label="Loading Spinner"
data-testid="loader"
/>
        </div> ) : (

          
<div className='bg-slate-950'>
            <div className="hero min-h-screen bg-base-200 bg-slate-950">
  <div className="hero-content flex-col lg:flex-row bg-black text-white">
    <img src={chef.picture} />
    <div>
      <h1 className="text-5xl font-bold">{chef.name}</h1>
      <p className="py-2">Like: {chef.likes}</p>
      <p className="py-2">Recipe: {chef.total_recipe}</p>
      <p className="py-2">About: {chef.bio}</p>
      <p className="py-2">Experience: {chef.experience_years} years</p>
      
    </div>
  </div>
</div>
    <div className='flex justify-around container mx-auto'>
       {
        chef.recipes.map(cards => <Card
        cards ={cards}
        ></Card>)
       }
    </div>


        </div> )
        } 
       </div>
      </div>
       </div>


      </div>
    );
};

export default Chef;