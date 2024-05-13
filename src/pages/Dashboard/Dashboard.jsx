import { Routes, Route } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import { useState } from "react";
import Edit from "./Edit";
import { useNavigate, Navigate } from "react-router-dom";

function Dashboard() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/list" />} />
      {/* List */}
      <Route path="/list" element={<List />} />
      {/* Add */}
      <Route path="/Add" element={<Add />} />
      {/* Edit */}
      <Route path="/Edit" element={<Edit />} />
    </Routes>
  );
}

export default Dashboard;
