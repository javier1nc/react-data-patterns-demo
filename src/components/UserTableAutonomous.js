import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../css/Table.css'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import axios from "axios";

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    console.log(row);
    return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}


class UserTableAutonomous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.state.users} trClassName={rowClassNameFormat}>
                    <TableHeaderColumn isKey dataField='id'></TableHeaderColumn>
                    <TableHeaderColumn dataField='name'></TableHeaderColumn>
                    <TableHeaderColumn dataField='username'></TableHeaderColumn>
                </BootstrapTable>
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
            </div>
        )
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await axios.get(USER_SERVICE_URL);
            this.setState({users: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
        }
    }
}

export default UserTableAutonomous
