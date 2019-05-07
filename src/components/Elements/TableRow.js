import React, { Component } from 'react'

export default class TableRow extends Component {

    PermissionShow = () => {
        if(this.props.Permission == 1) {return "Admin ";}
        else if(this.props.Permission == 2) {return "Moderator ";}
        else { return "Normal User ";}
    }

    editClick = () => {
        this.props.editFunClick();
    }

    deleteBtnClick = (idUser) => {
        this.props.deleteBtnClick(idUser);
    }

  render() {
    return (
        <tr>
            <td >{this.props.number}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>{this.PermissionShow()}</td>
            <td>
                <div className="btn-group">
                <div className="btn btn-warning edit" onClick={()=>this.editClick()}>
                    <i className="fas fa-edit" onClick={()=>this.props.changeEditUserStatus()}> Edit </i>
                </div>
                <div className="btn btn-danger delete" onClick={(idUser)=>this.deleteBtnClick(this.props.id)}>
                    <i className="fas fa-trash"> Delete </i>
                </div>
                </div>
            </td>
        </tr>
    )
  }
}
