import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function List({ employeeData, handleEdit, handleDelete }) {

    const nav = useNavigate();

    return (
        <div>
            <div>
                <h3 className="d-flex justify-content-center mt-3">Employee Mangement Application</h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '15px' }}>
                <button className="btn btn-success" onClick={() => {
                    nav("/Add");
                }}>Add Employee</button>
            </div>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">BirthDate</th>
                        <th scope="col">Department</th>
                        <th scope="col">Experience</th>
                        <th colSpan={2} className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData.length > 0 ? (
                            employeeData.map((employee, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{employee.name}</td>
                                    <td>{employee.birthDate}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.experience}</td>
                                    <td><button
                                        className="btn btn-info"
                                        onClick={() => { handleEdit(employee.id) }}
                                    >Edit</button></td>
                                    <td><button
                                        className="btn btn-danger"
                                        onClick={() => { handleDelete(employee.id) }}
                                    >Delete</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">No Employees</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )

}

export default List;