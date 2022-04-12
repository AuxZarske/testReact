import React from "react";
const Card = ({data}) => {
 

  return  (
    <div className="card">
      <img src={data.picture.large} alt={`photo ${data.name.last} ${data.name.first} `}  />  
      <section className="infoUser">
        <h1>
        {data.name.title}. {data.name.last} {data.name.first} 
        </h1>
        
        <p>Phone: {data.phone}</p>
        <p>Cell: {data.cell}</p>      
        <p>Email: {data.email}</p>
      </section> 
    </div>
  )
};

export default Card;
