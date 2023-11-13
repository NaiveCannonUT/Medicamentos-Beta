import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { useActionData } from 'react-router-dom';
import axios from 'axios'


function Tabla() {

    const [MedicamentosMorning, setMedicamentosMorning] = useState([])
    const [MedicamentosNoon, setMedicamentosNoon] = useState([])
    const [MedicamentosEvening, setMedicamentosEvening] = useState([])
    const [MedicamentosNigth, setMedicamentosNigth] = useState([])
    const [MedicamentosOnlyWhen, setMedicamentosOnlyWhen] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/obtenerMedicamentosMorning")
            .then(respuesta => {
                setMedicamentosMorning(respuesta.data.medicamentos)
            })
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        axios.get("http://localhost:3001/obtenerMedicamentosNoon")
            .then(respuesta => {
                setMedicamentosNoon(respuesta.data.medicamentos)
            })
            .catch(error => console.log(error))

    }, [])


    useEffect(() => {
        axios.get("http://localhost:3001/obtenerMedicamentosEvening")
            .then(respuesta => {
                setMedicamentosEvening(respuesta.data.medicamentos)
            })
            .catch(error => console.log(error))

    }, [])


    useEffect(() => {
        axios.get("http://localhost:3001/obtenerMedicamentosNigth")
            .then(respuesta => {
                setMedicamentosNigth(respuesta.data.medicamentos)
            })
            .catch(error => console.log(error))

    }, [])


    useEffect(() => {
        axios.get("http://localhost:3001/obtenerMedicamentosOnlyWhen")
            .then(respuesta => {
                setMedicamentosOnlyWhen(respuesta.data.medicamentos)
            })
            .catch(error => console.log(error))

    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
            .then(res => {
                if (res.data.Status === "Success") {
                    location.reload(true)
                } else {
                    alert("ERR ERR ERR ERR ERR")
                }
            }).catch(err => console.log(err))
    }

    console.log(MedicamentosMorning)

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
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.medicamento}</div>))}
                                </td>
                                <td >
                                    {MedicamentosMorning.map((medicamentos)=>(
                                    <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.dosis}</div>
                                    ))}
                                </td>

                                <td >
                                    {MedicamentosMorning.map((medicamentos)=>(
                                    <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.hora}</div>
                                    ))}
                                </td>

                                <td >
                                {MedicamentosMorning.map((medicamentos)=>(
                                    <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.fecha}</div>
                                    ))}
                                </td>

                                <td >
                                {MedicamentosMorning.map((medicamentos)=>(
                                    <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.comentarios}</div>
                                    ))}
                                </td>
                            </tr>

                            <tr>
                                <td>Noon</td>
                                <td>
                                    {MedicamentosNoon.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-amber-200 h-7">{medicamento.medicamento}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNoon.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-amber-200 h-7">{medicamento.dosis}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNoon.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-amber-200 h-7">{medicamento.hora}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNoon.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-amber-200 h-7">{medicamento.fecha}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNoon.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-amber-200 h-7">{medicamento.comentarios}</div>
                                    ))}
                                </td>


                            </tr>

                            <tr>
                                <td >Evenning</td>
                                <td>
                                    {MedicamentosEvening.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-teal-400 h-7">{medicamento.medicamento}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosEvening.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-teal-400 h-7">{medicamento.dosis}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosEvening.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-teal-400 h-7">{medicamento.hora}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosEvening.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-teal-400 h-7">{medicamento.fecha}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosEvening.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-teal-400 h-7">{medicamento.comentarios}</div>
                                    ))}
                                </td>
                            </tr>

                            <tr>
                                <td  >Nigth</td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) =>(
                                    <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.medicamento}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNigth.map((medicamento) =>(
                                    <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.dosis}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNigth.map((medicamento) =>(
                                    <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.hora}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNigth.map((medicamento) =>(
                                    <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.fecha}</div>
                                    ))}
                                </td>
                                <td>
                                {MedicamentosNigth.map((medicamento) =>(
                                    <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.comentarios}</div>
                                    ))}
                                </td>

                            </tr>

                            <tr>
                                <td >Only when..</td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento)=>(
                                    <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.medicamento}</div>
                                    ))}                                </td>
                                <td>
                                {MedicamentosOnlyWhen.map((medicamento)=>(
                                    <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.dosis}</div>
                                    ))}  
                                </td>
                                <td>
                                {MedicamentosOnlyWhen.map((medicamento)=>(
                                    <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.hora}</div>
                                    ))}  
                                </td>
                                <td>
                                {MedicamentosOnlyWhen.map((medicamento)=>(
                                    <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.fecha}</div>
                                    ))}  
                                </td>
                                <td>
                                {MedicamentosOnlyWhen.map((medicamento)=>(
                                    <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.comentarios}</div>
                                    ))}  
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

                                <select className="p-2 border rounded-lg w-[95%] bg-white">
                                    <option>ml</option>
                                    <option>gr</option>

                                </select>

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
