import React, { useState } from "react";
import styles from "./app.module.css";
import { Form } from "./components/Form/Form";
import { Card } from "./components/Card/Card";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formDataArray, setFormDataArray] = useState([]);

  return (
    <div className={`${styles.container}`}>
      <Form
        onSubmit={(data) => {
          setFormSubmitted(true);
          setFormDataArray([...formDataArray, data]);
        }}
      />
      <div className={`${styles.card_main}`}>
        {formDataArray.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
