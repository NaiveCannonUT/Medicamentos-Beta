import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"


function Cuadro() {
    return (
        <>
            <h1 className="text-6xl text-center font-bold text-teal-500">Cuadro de medicamentos</h1>
            <div className="rounded-md shadow-lg bg-white p-4">
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Medications</th>
                            <th className="px-4 py-2">Dosage</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2" rowspan="4">Mornning</td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                            <td className="border px-4 py-2 bg-red-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                            <td className="border px-4 py-2 bg-red-400"></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2" rowspan="4">Noon</td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                            <td className="border px-4 py-2 bg-amber-100"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                            <td className="border px-4 py-2 bg-amber-50"></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2" rowspan="4">Evenning</td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                            <td className="border px-4 py-2 bg-teal-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                            <td className="border px-4 py-2 bg-teal-200"></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2" rowspan="4">Nigth</td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                            <td className="border px-4 py-2 bg-blue-400"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                            <td className="border px-4 py-2 bg-blue-300"></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2" rowspan="4">Only when..</td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                            <td className="border px-4 py-2 bg-green-300"></td>
                        </tr>
                        <tr>

                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                            <td className="border px-4 py-2 bg-green-200"></td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <br></br>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Añadir medicamento</button>


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

export default Cuadro