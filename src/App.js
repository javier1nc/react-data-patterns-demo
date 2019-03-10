import React, {Component} from 'react';
import './App.css';
import UserTableAutonomous from "./components/UserTableAutonomous";
import UserTableHOC from "./components/UserTableHOC";
import UserTableReactHooks from "./components/UserTableReactHooks";
import UserTableRenderProps from "./components/UserTableRenderProps";
import SimpleUserTable from "./components/SimpleUserTable";


class App extends Component {
    render() {
        return (
            <div className='App'>
                <h2> User Table - Autonomous</h2>
                <UserTableAutonomous/>
                <h2> User Table - High Order Component</h2>
                <UserTableHOC/>
                <h2> User Table - Render Props</h2>
                <UserTableRenderProps children={SimpleUserTable}/>
                <h2> User Table - React Hooks</h2>
                <UserTableReactHooks/>
            </div>
        );
    }

    //  fetchUsersWithAsyncWait = async () => {
    //     this.setState({...this.state, isFetching: true});
    //      try {
    //          const response = await axios.get(USER_SERVICE_URL);
    //          this.setState({users: response.data, isFetching: false});
    //      } catch (e) {
    //         console.log(e);
    //      }
    // };
    // fetchUsersWithAxios = () => {
    //     this.setState({...this.state, isFetching: true});
    //     axios.get(USER_SERVICE_URL)
    //         .then(response => {
    //             this.setState({users: response.data, isFetching: false})
    //         })
    //         .catch(e => console.log(e));
    // };
    //
    // fetchUsersWithFetch = () => {
    //     this.setState({...this.state, isFetching: true});
    //     fetch(USER_SERVICE_URL)
    //         .then(response => response.json())
    //         .then(result => {
    //             if (result !== this.state.users) {
    //                 this.setState({users: result, isFetching: false})
    //             }
    //         })
    //         .catch(e => console.log(e));
    // };
    //
    // fetchUsers = this.fetchUsersWithAxios;
}

export default App
