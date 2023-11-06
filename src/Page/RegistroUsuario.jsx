import React from 'react'

function Register() {
    return (
        <>
            <div className="relative w-full h-screen">
                <div className="flex justify-center items-center h-full">
                    <form className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[60%] bg-slate-200">
                        <h1 className="text-center font-bold text-3xl">Regístrate</h1>
                        <p className="p-2">Nombre de usuario</p>
                        <input className="w-[100%] rounded-lg p-2 border"></input>
                        <p className="p-2">Contraseña</p>
                        <input className="w-[100%] rounded-lg p-2 border"></input>
                        <div className="flex items-center justify-center p-3">
                            <button className="bg-indigo-500 p-2 text-white rounded-lg hover:bg-indigo-400">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Register