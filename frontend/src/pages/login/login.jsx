import image from "../../assets/img/logo.png"
import {Button, TextField} from "@mui/material";
import google from "../../assets/img/google.png"
import { Carousel } from '@material-tailwind/react';
import {useState} from "react";
import {API_URL} from "../../configs/config.jsx";
import axios from "axios";

const Login = () => {
    const [username,SetUsername] = useState("");
    const [password,SetPassword] = useState("");
    const login = async () => {
        const response = await axios.post(API_URL+"api/login",{username:username,password:password})
        console.log(response)
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-gray-900 flex flex-row gap-5 p-5">
                <Carousel className=" transition={{ duration: 2 }} rounded-xl w-[60vw] h-[95vh]">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            <div className="w-[40vw] h-[95vh] flex flex-col gap-5 items-center justify-center p-20">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full">
                    <img src={image} className="w-[120px] h-[120px]" alt="logo"/>
                </div>
                <span className="text-white">Welcome to Infobot</span>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    color="info"
                    sx={{
                        width: 250,
                        '& .MuiInputLabel-root': {
                            color: '#bab7b7'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#bab7b7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#bab7b7',
                            }
                        },
                        '& .MuiInputBase-input': {
                            color: 'white'
                        }
                    }}
                    onChange={(e)=>{SetUsername(e.target.value)}}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    color="info"
                    type="password"
                    sx={{
                        width: 250,
                        '& .MuiInputLabel-root': {
                            color: '#bab7b7'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#bab7b7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#bab7b7',
                            }
                        },
                        '& .MuiInputBase-input': {
                            color: 'white'
                        }
                    }}
                    onChange={(e)=>{SetPassword(e.target.value)}}
                />
                <Button variant="contained" style={{backgroundColor:'#046519',width:'120px', height:'50px',color:"white", borderRadius:"25px"}} sx={{
                    "&:hover": {
                        transform: 'scale(1.1)'
                    }

                }} onClick={login}> Login</Button>
                <div className="flex flex-row justify-center items-center gap-2">
                    <span className="w-[100px] h-[2px] bg-white"></span>
                    <span className="text-white text-lg">or</span>
                    <span className="w-[100px] h-[2px] bg-white"></span>
                </div>
                <Button variant="outlined" style={{borderColor:"white", width:"220px", height:"50px", display:"flex",flexDirection:"row", gap:"4px", borderRadius:"50px"}}>
                    <img src={google} className="w-[30px] height-[30px]"/>
                    <span>Continue with google</span>
                </Button>
            </div>
        </div>
    )
}
export default Login