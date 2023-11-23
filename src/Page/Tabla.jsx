import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { useActionData, useNavigate } from 'react-router-dom';
import axios from 'axios'


function Tabla() {

    const [MedicamentosMorning, setMedicamentosMorning] = useState([])
    const [MedicamentosNoon, setMedicamentosNoon] = useState([])
    const [MedicamentosEvening, setMedicamentosEvening] = useState([])
    const [MedicamentosNigth, setMedicamentosNigth] = useState([])
    const [MedicamentosOnlyWhen, setMedicamentosOnlyWhen] = useState([])
    const [dosis, setDosis] = useState([])
    const [horario, setHorario] = useState([])
    const [values, setValues] = useState({
        dosis: '',
        medida: ''
    })

    const [datos, setDatos] = useState({
        medicamento: '',
        dosis: '',
        hora: '', 
        fecha: '', 
        horario: ''
    })
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

    useEffect(() => {
        axios.get("http://localhost:3001/obtenerDosis")
            .then(respuesta => {
                setDosis(respuesta.data.dosis)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3001/obtenerHorario")
            .then(respuesta => {
                setHorario(respuesta.data.horario)
            })
            .catch(error => console.log(error))
    })

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
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/crearDosis', values)
        .then(res =>{
            console.log(res)
            navigate('/Tabla')
        })
        .catch(err => console.log(err))
    }

    const agregarMedicamento = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/crearMedicamento', datos)
        .then(res =>{
            console.log(res)
            navigate('/Tabla')
        })
        .catch(err => console.log(err))
    }


    return (
        <>

            <h1 className="text-8xl text-center font-bold text-teal-500">CUADRO DE <br></br>
                MEDICAMENTOS</h1>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className=" left-[5%] absolute p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Añadir medicamento</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2" type="button" className="left-[20%] absolute bg-green-400 p-2 text-white border rounded-lg hover:bg-green-300">Añadir dosis</button>
            <button onClick={handleLogout} className="right-[10%] absolute bg-red-500 text-white p-2 rounded-lg hover:bg-red-400">Cerrar sesion (No funciona)</button>

            <div className="flex justify-center h-screen items-center">
                <div className="w-3/4 rounded-md shadow-2xl bg-white flex justify-center px-10 pb-10 pt-5">

                    <table class="table-fixed w-full ">

                        <tr>

                            <th className="w-1/6"></th>
                            <th className="w-1/6 text-center">Medications</th>
                            <th className="w-1/6 text-center">Dosage</th>
                            <th className="w-1/6 text-center">Time</th>
                            <th className="w-1/6 text-center">Date</th>
                            <th className="w-1/6 text-center">Check</th>

                        </tr>

                        <tbody>

                            <tr>
                                <td>Mornning</td>

                                <td >
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.medicamento}</div>))}
                                </td>
                                <td >
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.dosis}</div>
                                    ))}
                                </td>

                                <td >
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.hora}</div>
                                    ))}
                                </td>

                                <td >
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">{medicamentos.fecha}</div>
                                    ))}
                                </td>

                                <td >
                                    {MedicamentosMorning.map((medicamentos) => (
                                        <div className="border px-4 py-2 bg-rose-200 h-7">
                                            <button className="font-bold">Check</button>
                                        </div>
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
                                        <div className="border px-4 py-2 bg-amber-200 h-7">
                                            <button className="font-bold">Check</button>
                                        </div>
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
                                        <div className="border px-4 py-2 bg-teal-400 h-7">
                                            <button className="font-bold">Check</button>
                                        </div>
                                    ))}
                                </td>
                            </tr>

                            <tr>
                                <td  >Nigth</td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.medicamento}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.dosis}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.hora}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-blue-400 h-7">{medicamento.fecha}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosNigth.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-blue-400 h-7">
                                            <button className="font-bold">Check</button>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td >Only when..</td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.medicamento}</div>
                                    ))}                                </td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.dosis}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.hora}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-green-300 h-7">{medicamento.fecha}</div>
                                    ))}
                                </td>
                                <td>
                                    {MedicamentosOnlyWhen.map((medicamento) => (
                                        <div className="border px-4 py-2 bg-green-300 h-7">
                                            <button className="font-bold">Check</button>
                                        </div>
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
                                <input onChange={e => setDatos({...datos, medicamento: e.target.value})} className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Dosis</p>
                                <select onChange={e => setDatos({...datos, dosis: e.target.value})} className="p-2 border rounded-lg w-[95%] bg-white">
                                    {dosis.map((dosisMedicina) => (
                                        <option  key={dosisMedicina.dosis_id} value={dosisMedicina.dosis_id} >{dosisMedicina.dosis}  {dosisMedicina.medida}</option>
                                    ))}
                                </select>

                                <p className="p-2 font-semibold">Hora</p>
                                <input onChange={e => setDatos({...datos, hora: e.target.value})} className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Fecha</p>
                                <input onChange={e => setDatos({...datos, fecha: e.target.value})} className="border rounded-lg w-[95%] p-2"></input>

                                <p className="p-2 font-semibold">Seleccione su hora</p>
                                <select onChange={e => setDatos({...datos, horario: e.target.value})} className="p-2 border rounded-lg w-[95%] bg-white">
                                    {horario.map((horarioMedicina) => (
                                        <option key={horarioMedicina.id_horario} value={horarioMedicina.id_horario}>{horarioMedicina.horario}</option>
                                    ))}
                                </select>
                            <button onClick={agregarMedicamento} className="bg-green-500 hover:bg-green-400 p-2 text-white rounded-lg">Agregar</button>
                            </form>
                        </div>
                        <div class="modal-footer">                           
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agrega tus dosis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <p className="p-2 font-semibold">Añadir una dosis</p>
                                <input onChange={e => setValues({...values, dosis: e.target.value})} type="text" className="border rounded-lg p-2"></input>

                                <p className="font-semibold p-2">Agrega el tipo de medida</p>
                                <input placeholder='ML/GR' onChange={e => setValues({...values, medida: e.target.value})} className="border rounded-lg p-2">
                                </input>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" onClick={handleSubmit} className="bg-green-400 p-2 text-white border rounded-lg hover:bg-green-300">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tabla
