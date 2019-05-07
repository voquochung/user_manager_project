import React, { Component } from 'react'
import TableRow from './TableRow';

export default class Table extends Component {

    deleteBtnClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => 
        this.props.DataUserProps.map((value,key) => (
            <TableRow deleteBtnClick = {(idUser)=> this.deleteBtnClick(idUser)} editFunClick={(user)=>this.props.editFun(value)} key={key} id={value.id} userName={value.name} number={key+ 1} 
            tel={value.tel} Permission={value.Permission} changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        ))

  render() {

    return (
    <div className="col">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Authendicate</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.mappingDataUser()}
            </tbody>
        </table>
    </div>
    )
  }
}
