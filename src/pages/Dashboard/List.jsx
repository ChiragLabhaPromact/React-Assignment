import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, setSelectdValue } from "../../features/user/user";

function List() {
  const nav = useNavigate();
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleEdit = (id) =>  {
    dispatch(setSelectdValue(id));
    nav("/Edit")
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure Delete Employee")) {
      dispatch(removeUser(id));
    }
  }

  return (
    <div>
      <div>
        <h3 className="d-flex justify-content-center mt-3">
          Employee Mangement Application
        </h3>
      </div>
      <div style={{ textAlign: "right", marginRight: "15px" }}>
        <button
          className="btn btn-success"
          onClick={() => {
            nav("/Add");
          }}
        >
          Add Employee
        </button>
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
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.birthDate}</td>
                <td>{user.department}</td>
                <td>{user.experience}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No Employees
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
