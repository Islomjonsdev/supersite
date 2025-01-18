import React from "react";
import { branches } from "../../api";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Branches.scss";

const Branches = () => {
  const mapStyles = {
    height: "569px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.2995,
    lng: 69.2401, 
  };

  const locations = [
    { lat: 41.2995, lng: 69.2401, title: "Tashkent Branch" },
  ];
  return (
    <section className="branches">
      <div className="container">
        <div className="branches_wrapper">
          <div className="branches_left">
            <h1>Мы работаем по всему миру</h1>
            <div className="branches_left_list">
              {branches?.map((item, id) => (
                <div key={id}>
                  <h4>{item?.branch}</h4>
                  <p>{item?.location}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="branches_right">
            <LoadScript
              googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
              libraries={["places"]}
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              >
                {locations.map((loc, index) => (
                  <Marker key={index} position={loc} title={loc.title} />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
