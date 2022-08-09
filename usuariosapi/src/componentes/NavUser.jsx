import { Link } from "react-router-dom";


function NavUser() {
  return (
    <div className="NavUser">
      <h1>Users</h1>
      <button><Link to={"/"}>
      <span className="iconify" data-icon="ep:back"></span>
        Volver</Link>
      </button>
    </div>
  )
}
export default NavUser;