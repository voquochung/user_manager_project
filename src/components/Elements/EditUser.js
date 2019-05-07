import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    saveBtn = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form method="post">
                        <div className="card text-left">
                            <div className="card text-white border-warning mb-3 mt-2">
                                <div className="card-header text-center bg-warning">Edit User Profile</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input onChange={(event)=> this.isChange(event)} defaultValue={this.props.userEditObject.name} 
                                        type="text" name="name" className="form-control"  placeholder="Name User" />                                
                                    </div>
                                    <div className="form-group">
                                        <input onChange={(event)=> this.isChange(event)}  defaultValue={this.props.userEditObject.tel} 
                                        type="text" name="tel" className="form-control"  placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">                                              
                                        <select onChange={(event)=> this.isChange(event)}  className="custom-select" name="Permission" 
                                        defaultValue={this.props.userEditObject.Permission}>
                                        <option value>Authendicate</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal User</option>
                                        </select>                                    
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-block btn-warning text-white" value="Save" onClick={()=> this.saveBtn()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;