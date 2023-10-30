import React from 'react'

function Login() {
    return (
        <>
        <div className="">

        
            <div className="relative w-full h-screen">
                <div className="flex justify-center items-center h-full">
                    <form className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[60%] bg-slate-200">
                        <h1 className="text-center font-bold text-3xl">Incia sesion</h1>
                        <p className="p-2">Nombre de usuario</p>
                        <input className="w-[100%] rounded-lg p-2 border"></input>
                    
                        <p className="p-2">Contraseña</p>
                        <input className="w-[100%] rounded-lg border p-2"></input>
                        <div className="flex items-center justify-center p-3">
                            <button className="bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-400">Login</button>
                        </div>    
                        <p className="text-center">¿Aun no tienes tu cuenta?</p>
                        <div className="flex items-center justify-center">
                        <button className="bg-cyan-500 p-2 rounded-lg text-white hover:bg-cyan-400">Registrarse</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login
