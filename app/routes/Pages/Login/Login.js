import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";


const Login = (props) => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Wese Agent Banking Sign In"
                text = "Welcome to Wese Core Banking Agent Application"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress / Username 
                    </Label>
                    <Input type="username"  onChange= {props.updateUsername} name="username" id="username" placeholder="Enter username or email " className="bg-white" />
                    <FormText color="muted">
                        Login details should always be kept private.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" onChange ={props.updatePassword} name="password" id="password" placeholder="Password..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button onClick= {props.handleLogin} color={ color } block>
                            Sign In
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/forgotpassword" className="text-decoration-none">
                    Forgot Password
                </Link>
                <Link to="/pages/register" className="ml-auto text-decoration-none">
                    Register
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Login;
