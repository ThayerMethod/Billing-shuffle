import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Billing Summary</Link></li>
      <li><Link to="/service-breakdown">Service Breakdown</Link></li>
      <li><Link to="/alert-config">Configure Alerts</Link></li>
    </ul>
  </nav>
);

export default Navbar;
