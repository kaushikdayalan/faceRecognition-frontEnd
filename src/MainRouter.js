import React from "react"
import {Route, Switch} from "react-router-dom"
import { AuthProvider } from "./firebaseAuth/Auth";
import PrivateRoute from "./core/PrivateRoute";
//-----Components-------
import Menu from "./options/Menu";
import Signup from "./users/Signup";
import Signin from "./users/Signin";

const MainRouter = ()=>(
    <div>
        <AuthProvider>
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <PrivateRoute path="/menu" component={Menu}></PrivateRoute>
        </Switch>
        </AuthProvider>
    </div>
)

export default MainRouter;