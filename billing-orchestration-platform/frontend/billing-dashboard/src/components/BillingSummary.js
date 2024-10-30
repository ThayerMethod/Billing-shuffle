import React, { useEffect, useState } from "react";
import { fetchBillingSummary } from "../api";

const BillingSummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchBillingSummary().then(data => setSummary(data));
  }, []);

  return (
    <div>
      <h2>Billing Summary</h2>
      {summary ? (
        <div>
          <p>Total Spend: ${summary.total_spend}</p>
          <p>Month-to-Date: ${summary.month_to_date}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BillingSummary;
