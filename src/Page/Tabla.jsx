import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

function Tabla() {
    return (
        <>
            <h1 className="text-8xl text-center font-bold text-teal-500">CUADRO DE <br></br>
            MEDICAMENTOS</h1>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Añadir medicamento</button>
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
            

            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Añadir medicamentos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <p className="p-2">Medicamento</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2">Nombre clave</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2">Descripcion (opcional)</p>
                                <input className="border rounded-lg w-[95%] p-2"></input>

                                <p>Seleccione su hora</p>
                                <select className="flex p-2">
                                <option className="border p-2 rounded-lg">Morning</option>
                                <option className="border p-2 rounded-lg">Noon</option>
                                <option className="border p-2 rounded-lg">Evening</option>
                                <option className="border p-2 rounded-lg">Nigth</option>
                                <option className="border p-2 rounded-lg">Only when I need it</option>
                                </select>
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
