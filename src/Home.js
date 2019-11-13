import React from "react"
import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
const Home = (props) =>{
    return(
        <div>
            <h1 className="jumbotron" align="center">Face Recognition</h1>
            <button onClick={() => props.history.push('/signin')}>
									Sign in
								</button>
        </div>
    )
};

export default Home;