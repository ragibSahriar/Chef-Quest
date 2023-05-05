import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleTostify = ()=>{
toast('Recipe is your favorite')
setIsClicked(true);
    }

    console.log(props.cards);
    const {recipe_name,ingredients,cooking_method, recipe_img} = props.cards;

    

    return (
        <div className='mx-2'>
           <div className="card w-96 bg-black text-white shadow-xl">
  <figure><img className="object-cover object-center h-64 w-full" src={recipe_img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    <p>{recipe_name}</p>
    </h2>
    <p><span className='text-xl font-semi-bold'>Ingredients :</span>{
                ingredients.map((ingredient,idx)=><li key={idx}>{ingredient}</li>)
            }</p>
    <div className="card-actions justify-end">
     <h2><span className='text-xl font-semi-bold'>Cooking method:</span>
        <br />
        {cooking_method}</h2>
</div>

<div>
<button className='p-2 px-12 bg-orange-500 text-black rounded text-xl font-bold' onClick={handleTostify} disabled={isClicked}>Favorite</button>
<ToastContainer></ToastContainer>
</div>
        </div>
    </div>
  </div>
    );
};

export default Card;