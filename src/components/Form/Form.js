import React, { useState } from "react";
import styles from "./form.module.css";

export const Form = ({ onSubmit }) => {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    const form = {
      fullname,
      age,
      job,
      contact,
    };
    console.log(form);
    setFullname("");
    setAge("");
    setJob("");
    setContact("");

    onSubmit(form);
  };

  const disableBtn =
    !fullname?.trim() || !age?.trim() || !job?.trim() || !contact?.trim();
  const checkAge = age.length <= 1;

  return (
    <div className={`${styles.main_form}`}>
      <h1>Personal Info</h1>
      <div className={`${styles.form_content}`}>
        <label htmlFor="">Fullname</label>
        <input
          type="text"
          value={fullname}
          name="fullanme"
          onChange={(e) => setFullname(e.target.value)}
        />
        <label htmlFor="">Age</label>
        <div>
          <input
            type="number"
            value={age}
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <span style={{ display: checkAge ? "block" : "none" }}>
            {checkAge ? "Minimum 18 years old!" : ""}
          </span>
        </div>
        <label htmlFor="">Job</label>
        <input
          type="text"
          value={job}
          name="job"
          onChange={(e) => setJob(e.target.value)}
        />
        <label htmlFor="">Contact</label>
        <input
          type="number"
          value={contact}
          name="contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={!checkAge ? disableBtn : "null"}
        >
          SEND
        </button>
      </div>
    </div>
  );
};
