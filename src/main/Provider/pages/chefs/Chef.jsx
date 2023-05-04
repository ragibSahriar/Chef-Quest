import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
// import Recipe from './Recipe';



const Chef = () => {
const {id} = useParams();
const chef = useLoaderData();
console.log(chef.recipes);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
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
    <div className='flex container mx-auto'>
       {
        chef.recipes.map(cards => <Card
        cards ={cards}
        ></Card>)
       }
    </div>


        </div>
    );
};

export default Chef;