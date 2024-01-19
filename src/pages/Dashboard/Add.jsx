import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Add({ employeeData, setEmployeeData }) {

    const [name, setName] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [department, setDepartment] = useState('');
    const [experience, setExperience] = useState('');
    const nav = useNavigate();

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const id = employeeData.length + 1;
        let newEmployee = {
            id: id,
            name: name,
            birthDate: selectedDate,
            department: department,
            experience: experience
        }

        setName('');
        setSelectedDate('');
        setDepartment('');
        setExperience('');

        nav("/list");

        employeeData.push(newEmployee);
        setEmployeeData(employeeData);
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '350px', position: 'absolute', top: '15%' }}>
                <form>
                    <div className="p-2">
                        <h3 className="text-center">Add Employee</h3>
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
                        onClick={handleAddEmployee}
                    > Add Employee </button >
                </form >
            </div >
        </div >
    )
}

export default Add;