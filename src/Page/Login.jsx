import React, { useEffect, useState } from 'react'
import Cuadro from './Cuadro';

function Login() {
    const [datos, setDatos] = useState({
        usuario: '',
        contrasena: '',
        autenticado: false,
    });

    const iniciarSesion = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión...");

        if (datos.usuario === '' || datos.contrasena === '') {
            alert("Por favor, completa todos los campos.");
        } else if (datos.usuario === datos.usuario && datos.contrasena === datos.contrasena) {
            // Cambia 'usuario_correcto' y 'contrasena_correcta' por los valores correctos
            localStorage.setItem('elusuario', datos.usuario);
            localStorage.setItem('logueado', true);
            setDatos({ ...datos, autenticado: true });
        } else {
            alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }
    };

    const cerrarSesion = () => {
        localStorage.clear();
        setDatos({ ...datos, autenticado: false });
    };

    return (
        datos.autenticado ? (
            <>
                <Cuadro></Cuadro>
            </>
        ) : (

            <>


                <div className="">
                    <div className="relative w-full h-screen">
                        <div className="flex justify-center items-center h-full">
                            <form className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[60%] bg-slate-200">
                                <h1 className="text-center font-bold text-3xl">Incia sesion</h1>
                                <p className="p-2">User</p>
                                <input onChange={(e) => { (setDatos({ ...datos, usuario: e.target.value })) }} className="w-[100%] rounded-lg p-2 border"></input>

                                <p className="p-2">Contraseña</p>
                                <input onChange={(e) => { (setDatos({ ...datos, contrasena: e.target.value })) }} className="w-[100%] rounded-lg border p-2"></input>
                                <div className="flex items-center justify-center p-3">
                                    <button  onClick={iniciarSesion} type="submit" className="bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-400">Login</button>
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
    )
}

export default Login
