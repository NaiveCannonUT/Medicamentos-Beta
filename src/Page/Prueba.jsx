import React, { Component } from 'react';

class MedicationTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medications: [],
            newMedication: '',
            newHour: '',
            newFrequency: 1,
        };

        this.hours = [
            { time: '6:00 AM', period: 'mañana' },
            { time: '7:00 AM', period: 'mañana' },
            { time: '8:00 AM', period: 'mañana' },
            { time: '9:00 AM', period: 'mañana' },
            { time: '10:00 AM', period: 'mañana' },
            { time: '11:00 AM', period: 'mañana' },
            { time: '12:00 PM', period: 'tarde' },
            { time: '13:00 PM', period: 'tarde' },
            { time: '14:00 PM', period: 'tarde' },
            { time: '15:00 PM', period: 'tarde' },
            { time: '16:00 PM', period: 'tarde' },
            { time: '17:00 PM', period: 'tarde' },
            { time: '18:00 PM', period: 'tarde' },
            { time: '19:00 PM', period: 'noche' },
            { time: '20:00 PM', period: 'noche' },
            { time: '21:00 PM', period: 'noche' },
            { time: '22:00 PM', period: 'noche' },
            { time: '23:00 PM', period: 'noche' },
            { time: '00:00 AM', period: 'mañana' },
            { time: '1:00 AM', period: 'mañana' },
            { time: '2:00 AM', period: 'mañana' },
            { time: '3:00 AM', period: 'mañana' },
            { time: '4:00 AM', period: 'mañana' },
            { time: '5:00 AM', period: 'mañana' },

        ];
    }

    handleCheckClick = (index) => {
        const { medications } = this.state;

        const updatedMedications = medications.map((medication, i) => {
            if (i === index) {
                const nextHourIndex = (medication.currentHourIndex + medication.frequency) % this.hours.length;
                return { ...medication, currentHourIndex: nextHourIndex };
            }
            return medication;
        });

        this.setState({ medications: updatedMedications });
    };

    handleMedicationChange = (event) => {
        this.setState({ newMedication: event.target.value });
    };

    handleHourChange = (event) => {
        this.setState({ newHour: event.target.value });
    };

    handleFrequencyChange = (event) => {
        const newFrequency = parseInt(event.target.value, 10);
        this.setState({ newFrequency: isNaN(newFrequency) ? 1 : newFrequency });
    };

    handleAddMedication = () => {
        const { newMedication, newHour, newFrequency } = this.state;

        const newMedicationObj = {
            name: newMedication,
            time: newHour || this.hours[0].time,
            period: this.hours[0].period,
            currentHourIndex: this.hours.findIndex((hour) => hour.time === (newHour || this.hours[0].time)),
            frequency: newFrequency,
        };

        this.setState((prevState) => ({
            medications: [...prevState.medications, newMedicationObj],
            newMedication: '',
            newHour: '',
            newFrequency: 1,
        }));
    };

    render() {
        const { medications } = this.state;

        return (
            <div>
                <div>
                    <label>
                        Medicamento:
                        <input className="border rounded-lg"
                            type="text"
                            value={this.state.newMedication}
                            onChange={this.handleMedicationChange}
                        />
                    </label>
                    <label>
                        Hora:
                        <input className="border rounded-lg"
                            type="text"
                            value={this.state.newHour}
                            onChange={this.handleHourChange}
                        />
                    </label>
                    <label>
                        Frecuencia (horas):
                        <input className="border rounded-lg"
                            type="number"
                            value={this.state.newFrequency}
                            onChange={this.handleFrequencyChange}
                            min="1"
                        />
                    </label>
                    <button className="bg-indigo-700 rounded-lg border p-2 text-white" onClick={this.handleAddMedication}>Agregar Medicamento</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Medicamento</th>
                            <th>Tomado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medications.map((medication, index) => (
                            <tr key={index}>
                                <td>{this.hours[medication.currentHourIndex]?.time || 'Hora no disponible'}</td>
                                <td>{medication.name}</td>
                                <td>
                                    <button onClick={() => this.handleCheckClick(index)}>
                                        {index === 0 ? '✓' : '-'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MedicationTable;
