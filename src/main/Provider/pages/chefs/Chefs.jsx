import React from "react";

const Chefs = (props) => {
  const { id, name, picture, experience_years, total_recipe, likes } = props.chef;


//   Chef Picture

//   Chef Name
  
//   Years of experience
  
//   Numbers of recipes
  
//   Likes
  
//   View Recipes Button

  return (
    <div>
      <div className="col-span-">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-25"
            src={picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>Years of experience: {experience_years}</h3>
          <h3>Number of recipes {total_recipe}</h3>
          <h3>Likes: {likes}</h3>
          <button>
          View Recipes Button
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chefs;
