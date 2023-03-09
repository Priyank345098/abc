import React, { Component } from 'react'
import RegisterServices from '../../services/RegisterServices'

export default class RegisterUser extends Component {
constructor(props){
    super(props)
    this.state={
        registerUser:[]
    }
}

componentDidMount(){
    alert("hi")

        RegisterServices.getAllRegisterUser().then((res)=>{

        this.setState({ registerUser: res.data })
    })
}

  render() {
    return (
      <div>
        <h2 className="text-center">
        Register User List
        </h2>
        <div className="row">
        <table className="table table-striped table-bordered">
        <thead>
<tr>
    <th> User Name</th>
    <th> Email </th>
    <th> Password </th>
    <th> Address </th>
    <th> Mobile No </th>
    <th> Licence No </th>
    <th> Actions </th>

</tr>      </thead>

<tbody>

    {
        this.state.registerUser.map(
            regUser =>
            <tr key={regUser.id}>
                <td>{regUser.username}</td>
                <td>{regUser.email}</td>
                <td>{regUser.password}</td>
                <td>{regUser.address}</td>
                <td>{regUser.mblNo}</td>
                <td>{regUser.licNo}</td>
              

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
