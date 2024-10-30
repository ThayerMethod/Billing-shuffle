import React, { useState } from "react";
import { setAlert } from "../api";

const AlertConfig = () => {
  const [threshold, setThreshold] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setAlert(threshold);
    alert("Alert set successfully!");
  };

  return (
    <div>
      <h2>Configure Alerts</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Spending Threshold ($):
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
          />
        </label>
        <button type="submit">Set Alert</button>
      </form>
    </div>
  );
};

export default AlertConfig;
