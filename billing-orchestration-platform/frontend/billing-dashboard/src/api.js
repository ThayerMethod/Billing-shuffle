const BASE_URL = "http://localhost:8000/api/v1";

export const fetchBillingSummary = async () => {
  const response = await fetch(`${BASE_URL}/billing/summary`);
  return response.json();
};

export const fetchServiceBreakdown = async () => {
  const response = await fetch(`${BASE_URL}/billing/services`);
  return response.json();
};

export const setAlert = async (threshold) => {
  const response = await fetch(`${BASE_URL}/alerts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ threshold: parseFloat(threshold) })
  });
  return response.json();
};
