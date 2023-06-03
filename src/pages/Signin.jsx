
import { FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Signup from './Signup.jsx';

function Signin() {
    return (
      <div className="signin">
        <div className="signin-logo">
          <FaSpotify className="logo-icon" />
          <h1>Spotify Clone</h1>
        </div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
        <p>Don't have an account? <Link to="/">Sign up</Link></p>
      </div>
    );
  }
  export default Signin;
  