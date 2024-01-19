import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit({ employeeData, selectedEmployee, setEmployeeData }) {
    const [name, setName] = useState(selectedEmployee.name);
    const [selectedDate, setSelectedDate] = useState(selectedEmployee.birthDate);
    const [department, setDepartment] = useState(selectedEmployee.department);
    const [experience, setExperience] = useState(selectedEmployee.experience);
    const nav = useNavigate();
    const id = selectedEmployee.id;

    const handleUpdateEmployee = (e) => {
        e.preventDefault();
        let updateEmployee = {
            id: id,
            name: name,
            birthDate: selectedDate,
            department: department,
            experience: experience
        }

        for (let i = 0; i < employeeData.length; i++) {
            if (employeeData[i].id === id) {
                employeeData.splice(i, 1, updateEmployee);
                break;
            }
        }
        setEmployeeData(employeeData);
        nav("/list");
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '350px', position: 'absolute', top: '15%' }}>
                <form>
                    <div className="p-2">
                        <h3 className="text-center">Edit Employee</h3>
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name..."
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">BirthDate :</label>
                        <input
                            type="date"
                            className="form-control"
                            value={selectedDate}
                            onChange={(e) => { setSelectedDate(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Department :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={department}
                            placeholder="Enter Department..."
                            onChange={(e) => { setDepartment(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Experience(In Years) :</label>
                        <input
                            type="number"
                            className="form-control"
                            value={experience}
                            placeholder="Enter Experience..."
                            onChange={(e) => { setExperience(e.target.value) }}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={handleUpdateEmployee}
                    > Update Employee </button >
                </form >
            </div >
        </div >
    )
}

export default Edit;