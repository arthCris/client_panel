import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Clients extends Component {
    render() {
        const clients = [
            {
                id: '12312',
                fistName: 'Arth Cris',
                lastName: 'Yuson',
                email: 'arth@email.com',
                phone: '091241212',
                balance: '1000'
            },
            {
                id: '12412',
                fistName: 'Louis',
                lastName: 'Suelto',
                email: 'louis@email.com',
                phone: '091901212',
                balance: '10000'
            }
    ]
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Balance</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.fistName} {client.lastName}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>{client.balance}</td>
                            <td>
                                <Link to={`clients/add/${client.id}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Clients
