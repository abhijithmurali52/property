  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { useParams } from "react-router-dom";

  const PropertyPage = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
      axios
        .get(`http://localhost:3014/cardInfo/${id}`)
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error("Error fetching property data:", error);
        });
    }, [id]);

    if (!property) {
      return <p>Loading...</p>;
    }

    console.log(property.Pic)

    return (
      <div>
        <h2>Property Details</h2>
      {/* <p> <img src={property.Pic} alt={property.Name} style={{ height: "12rem" }} /></p>  */}
        <h3>{property.Name}</h3>
        <div style={{display:"flex"}}>
          <p>{property.Room} room </p>
          <p>{property.Bedrooms} bed </p>
          <p>{property.Bathrooms} Bath </p>
          <p>{property.Area} sqft </p>
        </div>
        <p>{property.Price}/Month</p>
        <p>{property.About}</p>
   
                
      </div>
    );
  };

  export default PropertyPage;
