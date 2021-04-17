// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import data from "../../../fakeData/Data";

// const FoodDetails = () => {
//   const { foodId } = useParams();
//   const [count, setCount] = useState(1);
//   // console.log(foodId);
//   const [item, setItem] = useState({});
//   useEffect(() => {
//     const matchFood = data.find((food) => food.foodId == foodId);
//     setItem(matchFood);
//   }, [foodId]);
//   const { name, description, title, price, image } = item;
//   return (
//     <div className="row container">
//       <div className="col-md-6">
//         <h4>{name}</h4>
//         <p>{title}</p>
//         <h4>{price}</h4>

//         <button onClick={() => setCount(count - 1)}>-</button>
//         {count}
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <br />
//         <button>ADD</button>
//       </div>
//       <div className="col-md-6">
//         <img src={image} alt="" />
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;
