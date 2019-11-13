import React, { useCallback, useContext } from "react";
import "../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import app from "../firebaseAuth/Base";
import { AuthContext } from "../firebaseAuth/Auth";
import { Redirect } from "react-router";

const Signin = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/menu");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/Menu"/>;
    }
  
    return (
        
      <div className="container">
          <h1 className="jumbotron" align="center">Face Identification and Recognition</h1>
        <h1 className = "mt-5 mb-5">Login</h1>
        <form onSubmit={handleLogin}>
        <div className="form-group">
                <label className="bmd-label-floating">Email address</label> 
                <input type="email" className="form-control" name="email"/>
                <label className="bmd-label-floating">Password</label>
                <input type="password" className="form-control" name="password"/><br></br>
                <button type="submit" className="btn btn-raised btn-success">Login</button>&nbsp;
            </div>
        </form>
      </div>
    );
  };

  export default Signin;