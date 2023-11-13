import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const register = () =>{
        console.log("Username:", usernameReg);
        console.log("Password:", passwordReg);
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg
        },{timeout: 5000}).then((response) =>{
            console.log(response)
        }).catch((error) =>{
            console.error(" Error al registrar", error)
        })
    }

    return (
        <>
            <div className="relative w-full h-screen">
                <div className="flex justify-center items-center h-full">
                    <form className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[60%] bg-slate-200">
                        <h1 className="text-center font-bold text-3xl">Regístrate</h1>
                        <p className="p-2">Nombre de usuario</p>
                        <input onChange={(e) =>{
                            setUsernameReg(e.target.value)
                        }} className="w-[100%] rounded-lg p-2 border"></input>

                        <p className="p-2">Contraseña</p>
                        <input type='password' onChange={(e) =>{
                            setPasswordReg(e.target.value)
                        }} className="w-[100%] rounded-lg p-2 border"></input>
                        <div className="flex items-center justify-center p-3">
                            <button onClick={register} className="bg-indigo-500 p-2 text-white rounded-lg hover:bg-indigo-400">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Register