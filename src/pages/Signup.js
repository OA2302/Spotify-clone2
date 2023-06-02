import React, { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import './Signup.css';


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
  
   const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Add logic to create new user
      history.push("/");
    };
  
    return (
      <div className="signup">
        <div className="signup-logo">
          <FaSpotify className="logo-icon" />
          <h1>Spotify Clone</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    );
  }
  
  export default Signup;
