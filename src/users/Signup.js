import React,{useCallback} from "react";
import "../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import app from "../firebaseAuth/Base";
import {Link} from "react-router-dom";
const Signup = ({history})=>{

    const handleSignup = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/menu");
        } catch (error) {
          alert(error);
        }
      }, [history]);
    

    return(
        <div className="container">
            <h4 align = "center"> Sign Up</h4>
            <form onSubmit={handleSignup}>
            <div class="form-group">
                <label class="bmd-label-floating">Email address</label>
                <input type="email" class="form-control" name="email"/>
                <label class="bmd-label-floating">Email address</label>
                <input type="email" class="form-control" name="password"/><br></br>
                <button type="submit" className="btn btn-raised btn-success">Sign up</button>&nbsp;
                <Link to="/signin" className="btn btn-raised btn-success">Sign in</Link>
            </div>
            </form>
        </div>
    )
};

export default Signup;