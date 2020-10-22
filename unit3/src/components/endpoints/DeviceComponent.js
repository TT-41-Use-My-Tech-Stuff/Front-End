import React, { Component } from 'react'

class ListDeviceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.adddevice = this.addDevice.bind(this);
        this.editDevice = this.editDevice.bind(this);
        this.deleteDevice = this.deleteDevice.bind(this);
    }

    deleteDevice(id){
        Device.deleteDevice(id).then( res => {
            this.setState({employees: this.state.devices.filter(device => device.id !== id)});
        });
    }
    viewDevice(id){
        this.props.history.push(`/view-device/${id}`);
    }
    editDevice(id){
        this.props.history.push(`/add-device/${id}`);
    }

    componentDidMount(){
        Device.getDevice().then((res) => {
            this.setState({ devices: res.data});
        });
    }

    addDevice(){
        this.props.history.push('/add-device/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Device List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDevice}> Add Device</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> User ID</th>
                                    <th> Item Name</th>
                                    <th> Item Description</th>
                                    <th> Category</th>
                                    <th> Rate</th>
                                    <th> Image URL</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.devices.map(
                                        device => 
                                        <tr key = {device.id}>
                                             <td> {device.user_id} </td>   
                                             <td> {device.item_name}</td>
                                             <td> {device.item_description}</td>
                                             <td> {device.category}</td>
                                             <td> {device.rate}</td>
                                             <td> {device.img_url}</td>

                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent