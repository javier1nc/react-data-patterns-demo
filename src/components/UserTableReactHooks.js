import React, {useEffect, useState} from 'react';
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


function UserTableReactHooks() {
    const [data, setData] = useState({users: [], isFetching: false});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setData({users: data.users, isFetching: true});
                const response = await axios.get(USER_SERVICE_URL);
                setData({users: response.data, isFetching: false});
                this.setState({users: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <BootstrapTable data={data.users} trClassName={rowClassNameFormat}>
                <TableHeaderColumn isKey dataField='id'></TableHeaderColumn>
                <TableHeaderColumn dataField='name'></TableHeaderColumn>
                <TableHeaderColumn dataField='username'></TableHeaderColumn>
            </BootstrapTable>
            <p>{data.isFetching ? 'Fetching users...' : ''}</p>
        </div>
    )
}

export default UserTableReactHooks
