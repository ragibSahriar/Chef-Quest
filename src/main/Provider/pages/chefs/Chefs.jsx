import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";
const Chefs = (props) => {

  const [loading, setLoading] = useState(false);


 
const { id, name, picture, experience_years, total_recipe, likes } =props.chef;
console.log(id);

  return (
    <div>
      


      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className=" h-64" src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h1><p className="text-xl font-semibold">Years of experience: <span>{experience_years}  </span></p> </h1>
    <h1><p className="text-xl font-semibold">Numbers of recipes: <span>{total_recipe}</span>{}</p> </h1>
    <h1><p className="text-xl font-semibold">Likes: <span>{likes}</span></p> </h1>
    <div className="card-actions justify-end">
      
    <Link to={`/chef-recipes/${id}`} className="badge badge-primary p-4">
            View Recipes
          </Link>
    
    </div>
  </div>
</div>
    </div>
  );
};

export default Chefs;
