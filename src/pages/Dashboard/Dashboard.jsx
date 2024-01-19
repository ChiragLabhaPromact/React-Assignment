import { Routes, Route } from 'react-router-dom';
import List from './List';
import Add from './Add';
import { useState } from "react";
import Edit from './Edit';
import { useNavigate, Navigate } from "react-router-dom";

function Dashboard() {

    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const nav = useNavigate();

    const handleEdit = (id) => {
        const [employee] = employeeData.filter(employee => employee.id === id);
        setSelectedEmployee(employee);
        nav("/Edit")
    }

    const handleDelete = (id) => {
        if (confirm("Are you sure Delete Employee")) {
            setEmployeeData(employeeData.filter(employee => employee.id !== id));
        }
    }

    return (
        <Routes>
            {/* Redirect */}
            <Route path='/'
                element={
                    <Navigate
                        to="/list"
                    />
                }
            />
            {/* List */}
            <Route path="/list"
                element={
                    <List
                        employeeData={employeeData}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                }
            />
            {/* Add */}
            <Route path="/Add"
                element={
                    <Add
                        employeeData={employeeData}
                        setEmployeeData={setEmployeeData}
                    />
                }
            />
            {/* Edit */}
            <Route path="/Edit"
                element={
                    <Edit
                        employeeData={employeeData}
                        selectedEmployee={selectedEmployee}
                        setEmployeeData={setEmployeeData}
                    />
                }
            />
        </Routes>
    )

}


export default Dashboard;