import React, { useEffect, useState } from "react";
import { fetchServiceBreakdown } from "../api";

const ServiceBreakdown = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServiceBreakdown().then(data => setServices(data));
  }, []);

  return (
    <div>
      <h2>Service Breakdown</h2>
      <ul>
        {services.map(service => (
          <li key={service.name}>
            {service.name}: ${service.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBreakdown;
