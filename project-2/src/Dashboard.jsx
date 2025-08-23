import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card orange">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>
        <div className="stat-card blue">
          <h3>Total Sales</h3>
          <p>$52,000</p>
        </div>
        <div className="stat-card green">
          <h3>Total Products</h3>
          <p>85</p>
        </div>
        <div className="stat-card purple">
          <h3>Total Customers</h3>
          <p>340</p>
        </div>
      </div>

      {/* Grid Sections */}
      <div className="grid-container">
        {/* Product Management */}
        <div className="section-card">
          <h2>Product Management</h2>
          <div className="mini-grid">
            <div className="mini-card">Add Product</div>
            <div className="mini-card">Edit Product</div>
            <div className="mini-card">Delete Product</div>
          </div>
        </div>

        {/* Orders Management */}
        <div className="section-card">
          <h2>Orders Management</h2>
          <div className="mini-grid">
            <div className="mini-card">View Orders</div>
            <div className="mini-card">Change Order Status</div>
          </div>
        </div>

        {/* Inventory */}
        <div className="section-card">
          <h2>Inventory Management</h2>
          <div className="mini-grid">
            <div className="mini-card">Stock Levels</div>
            <div className="mini-card">Low-stock Alerts</div>
          </div>
        </div>

        {/* Profile */}
        <div className="section-card">
          <h2>Profile & Settings</h2>
          <div className="mini-grid">
            <div className="mini-card">Admin Info</div>
            <div className="mini-card">Update Password</div>
          </div>
        </div>
      </div>
    </div>
  );
}
