import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate('/Tabla')

    axios.defaults.withCredentials = true
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8080/login', datos)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/Tabla')
            }else{
                alert(res.data.Message)
            }   
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="">
                <div className="relative w-full h-screen">
                    <div className="flex justify-center items-center h-full">
                        <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[60%] bg-slate-200">
                            <h1 className="text-center font-bold text-3xl">Incia sesion</h1>
                            <p className="p-2">Email</p>
                            <input className="w-[100%] rounded-lg p-2 border" onChange={e => setDatos({...datos, email: e.target.value})}></input>

                            <p className="p-2">Contraseña</p>
                            <input className="w-[100%] rounded-lg border p-2" onChange={e => setDatos({...datos, password: e.target.value})}></input>
                            <div className="flex items-center justify-center p-3">
                                <button type="submit" className="bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-400" onClick={Login}>Login</button>
                            </div>
                            <p className="text-center">¿Aun no tienes tu cuenta?</p>
                            <div className="flex items-center justify-center">
                                <a href="/Registro" className="bg-cyan-500 p-2 rounded-lg text-white hover:bg-cyan-400">Registrarse</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )

}

export default Login
