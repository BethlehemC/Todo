
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        
    <nav className="navbar">
        <div className="container">
        <h1>ToDo</h1>
            <div className="menue">
            
              <Link to="/">Home</Link>
               <Link to="/About">  About     </Link> 
               <Link to="/Signup">  Login/Signup  </Link>
            </div>
        </div>
    </nav>



   

     );
}
 
export default Navbar;

