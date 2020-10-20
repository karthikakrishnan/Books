import React, { useState } from 'react'
import axios from "axios"
import { Button, TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"

export function Login() {
    const [data, setData] = useState({
        user: {
            email: "",
            password: ""
        }
    });

    let history = useHistory()

    const onBlur = (e, field, value) => {
        setData(prevState => {
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    [field]: value
                }
            };
        });
    };

    const onSubmit = e => {
        axios.get('https://jsonplaceholder.typicode.com/users') //use ur login verification api
            .then(response => {
                const mockResponse = true
                if (mockResponse) {
                    history.push('/home')
                }
            })
    };

    return (
        <div>
            <p>Login to view Book Lists</p>
            <form >
                <div>
                    <TextField
                        name="email"
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        onBlur={e => onBlur(e, "firstName", e.target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                        labelWidth={50}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        placeholder="Password"
                        variant="outlined"
                        onBlur={e => onBlur(e, "password", e.target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                        type="password"
                        labelWidth={50}
                    />
                    <Button type="button" onClick={e => onSubmit(e)} variant="contained" color="primary">
                Login
                </Button>
                </div>
            </form>
            
        </div>
    )
}
