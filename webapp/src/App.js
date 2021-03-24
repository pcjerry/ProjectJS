import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Login/Dashboard";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/ForgotPassword";
import UpdateProfile from "./components/Login/UpdateProfile";
import PrivateRoute from "./components/Login/PrivateRoute"

import LandingPage from "./components/LandingPage";
import Admin from "layouts/Admin.js";

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </AuthProvider>
            </Router>
        </>
    );
}

export default App;
