import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Denna Sida Finns inte</h2>
            <Link to="/">Tillbaka till förstasidan...</Link>
        </div>
    );
}
 
export default NotFound;