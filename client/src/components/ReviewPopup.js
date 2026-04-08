import { useState } from "react";
import axios from "axios";

function ReviewPopup({ movie, close }) {
  const [data, setData] = useState({
    name: "",
    phone: "",
    movie: movie,
    rating: "",
    // district: "",
    city: "",
    review: ""
  });

  const handleSubmit = async () => {
    await axios.post("https://movie-backend-yze2.onrender.com/review", data);
    alert("Submitted!");
    close();
  };

  return (
    <div className="popup">
      <div className="form">
        <h3>{movie}</h3>

        <input placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input placeholder="Phone" onChange={(e)=>setData({...data,phone:e.target.value})}/>
        <input placeholder="Rating (1-5)" onChange={(e)=>setData({...data,rating:e.target.value})}/>
        {/* <input placeholder="District" onChange={(e)=>setData({...data,district:e.target.value})}/> */}
        <input placeholder="City" onChange={(e)=>setData({...data,city:e.target.value})}/>
        <textarea placeholder="Review" onChange={(e)=>setData({...data,review:e.target.value})}/>

        <button onClick={handleSubmit}>Post</button>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
export default ReviewPopup;