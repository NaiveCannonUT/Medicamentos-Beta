import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { useActionData } from 'react-router-dom';
import axios from 'axios'


function Tabla() {
    const handleLogout = () =>{
        axios.get('')
        .then(res => {
            if(res.data.Status === "Success"){
                location.reload(true)
            }else{
                alert("ERR ERR ERR ERR ERR")
            }
        }).catch(err => console.log(err))
    }
    return (
        <>
            <h1 className="text-8xl text-center font-bold text-teal-500">CUADRO DE <br></br>
            MEDICAMENTOS</h1>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Añadir medicamento</button>
            <button onClick={handleLogout} className="right-[10%] absolute bg-red-500 text-white p-2 rounded-lg hover:bg-red-400">Cerrar sesion</button>
            <div className="flex justify-center h-screen items-center">
                <div className="w-3/4 rounded-md shadow-2xl bg-white flex justify-center px-10 pb-10 pt-5">

                    <table class="table-fixed w-full ">

                        <tr>
                            <th className="w-1/6"></th>
                            <th className="w-1/6 text-center">Medications</th>
                            <th className="w-1/6 text-center">Dosage</th>
                            <th className="w-1/6 text-center">Time</th>
                            <th className="w-1/6 text-center">Date</th>
                            <th className="w-1/6 text-center">Comments</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>Mornning</td>
                                <td >
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>

                                </td>
                                <td className="h-15 w-100">
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-rose-300 h-7"></div>

                                </td>
                            </tr>

                            <tr>
                                <td>Noon</td>
                                <td>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-amber-100 h-7"></div>
                                </td>
                                

                            </tr>

                            <tr>
                                <td >Evenning</td>
                                <td>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-teal-200 h-7"></div>
                                </td>
                            </tr>

                            <tr>
                                <td  >Nigth</td>
                                <td>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>

                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-400 h-7"></div>
                                    <div className="border px-4 py-2 bg-blue-200 h-7"></div>

                                </td>
                            
                            </tr>

                            <tr>
                                <td >Only when..</td>
                                <td>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                </td>
                                <td>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-300 h-7"></div>
                                    <div className="border px-4 py-2 bg-green-200 h-7"></div>
                                </td>
                                

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            

            
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-bold text-2xl" id="exampleModalLabel">Añadir medicamentos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <p className="p-2 font-semibold">Medications</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Dosage</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Time</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Date</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Comments (opcional)</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>
                                <p className="p-2 font-semibold">Seleccione su hora</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Morning
                                        </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Noon
                                        </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Evening
                                        </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Nigth
                                        </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Only when I need it
                                        </label>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button className="bg-green-500 hover:bg-green-400 p-2 text-white rounded-lg">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tabla
