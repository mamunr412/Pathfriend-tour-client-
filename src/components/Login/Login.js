import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle, setIsloading, setUser } = useAuth()
    let history = useHistory()
    let location = useLocation();
    const Redirect_url = location.state?.from || '/home';

    const handelGoogle = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(Redirect_url)
            })
            .finally(() => setIsloading(false))
    }
    return (
        <div style={{ marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "40px", }} >
            <Container>
                <div className="login " style={{ backgroundColor: "#f8fafc" }}>
                    <h1 className="text-center ">Sign In With</h1>
                    <Button style={{ marginTop: "20px " }} onClick={handelGoogle} variant="primary">GOOGLE</Button>

                </div>

            </Container>
        </div>
    );
};

export default Login;