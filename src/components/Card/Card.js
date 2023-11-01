import React from "react";
import styles from "./card.module.css";

export const Card = ({ data }) => {
  return (
    <div className={`${styles.card}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        alt="#"/>
      <div className={`${styles.card_content}`}>
        <h2>{data.fullname}</h2>
        <p>Age: {data.age}</p>
        <p>Job: {data.job}</p>
        <p>Contact: {data.contact}</p>
      </div>
    </div>
  );
};
