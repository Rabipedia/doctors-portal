import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BuisnessInfo = () => {
  const infoData = [
    {
      title: "Opening Hours",
      description: "We are open at 24/7",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Location",
      description: "Probortok, Panchlaish, Chittagong",
      icon: faMapMarker,
      background: "dark",
    },
    {
      title: "Call Us",
      description: "+01783756016",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BuisnessInfo;
