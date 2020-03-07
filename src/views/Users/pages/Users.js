import React, { Component } from 'react';
import { Table } from 'reactstrap'
import { connect } from 'react-redux';
import { getUsers } from '../Redux/action';
import '../styles/users.css'

class Users extends Component {
    componentDidMount() {
        this.props.onGetUsers();
    }
    render() {
        return (
            <>
                <h1 className='text-title'>UsersList</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users && this.props.users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.street} - ${user.address.city}`} </td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.Users.users
})

const mapDispatchToProps = (dispatch) => ({
    onGetUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);