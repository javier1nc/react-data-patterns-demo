import {Component} from 'react'

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


class UserTableRenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: []
        };
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        this.setState({...this.state, isFetching: true});
        fetch(USER_SERVICE_URL)
            .then(response => response.json())
            .then(result => {
                if (result !== this.state.data) {
                    this.setState({data: result, isFetching: false})
                }
            })
            .catch(e => console.log(e));
    };
}

export default UserTableRenderProps

