import { Link } from "react-router-dom";

const Error = () => (
    <div>
        <h2 style={{color:'red'}}>Error</h2>
        <Link to={'/'}>Go to the job list </Link>
    </div>
);

export default Error;