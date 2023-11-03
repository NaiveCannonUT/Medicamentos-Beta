import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"


 function Cuadro() {
    return (
        <>
            <h1 className="text-6xl text-center font-bold text-teal-500">Cuadro de medicamentos</h1>
            <table>
                <thead>
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2 text-center">Medications</th>
                        <th className="px-4 py-2 text-center">Dosage</th>
                        <th className="px-4 py-2 text-center">Time</th>
                        <th className="px-4 py-2 text-center">Date</th>
                        <th className="px-4 py-2 text-center">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 h-14 w-25">Mornning</td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            <div className="border px-4 py-2 bg-rose-200"></div>
                            <div className="border px-4 py-2 bg-rose-300"></div>
                            
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="border px-4 py-2 w-25">Noon</td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                            <div className="border px-4 py-2 bg-amber-200"></div>
                            <div className="border px-4 py-2 bg-amber-100"></div>
                        </td>
                        
                    </tr>
                    
                    <tr>
                        <td className="border px-4 py-2 w-25">Evenning</td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                            <div className="border px-4 py-2 bg-teal-400"></div>
                            <div className="border px-4 py-2 bg-teal-200"></div>
                        </td>
                    </tr>
                   
                    <tr>
                        <td className="border px-4 py-2 w-25" >Nigth</td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            <div className="border px-4 py-2 bg-blue-400"></div>
                            <div className="border px-4 py-2 bg-blue-200"></div>
                            
                        </td>
                        
                    </tr>
                    
                    <tr>
                        <td className="border px-4 py-2 w-25"  >Only when..</td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                        </td>
                        <td className="h-15 w-25">
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                            <div className="border px-4 py-2 bg-green-300"></div>
                            <div className="border px-4 py-2 bg-green-200"></div>
                        </td>
                        
                    </tr>
                    
                </tbody>
            </table>

            <br></br>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Añadir medicamento</button>

            
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

export default Cuadro