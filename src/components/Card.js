import React from "react";
const Card = ({ data, width }) => {


  return (
    <div className="card">
      {width < 768 ? <img className="photo" src={data.picture.thumbnail} alt={`${data.name.last} ${data.name.first}`} />
        : width < 992 ? <img className="photo" src={data.picture.medium} alt={`${data.name.last} ${data.name.first}`} />
          : <img className="photo" src={data.picture.large} alt={`${data.name.last} ${data.name.first}`} />}

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
