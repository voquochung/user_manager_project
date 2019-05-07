import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tempValue: ''
    }
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
  }

  isShowEditForm = () => {
    if(this.props.editUserStatus === true){
      return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} changeEditUserStatus={()=>this.props.changeEditUserStatus()} userEditObject={this.props.userEditObject}/>
    }
  }

  AppearForm = () => {
    if(this.props.AppearForm === true){
      return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.Connect()}>Close</div>
    } else {
      return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.Connect()}>Add New</div>
    }
  }

  isChange = (event) => {
      this.setState({
        tempValue: event.target.value
      })
      this.props.getTextSearch(this.state.tempValue);
  }

  render() {
    return (
      <div>
        <div className="col-12">
            {this.isShowEditForm()}
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" placeholder="Type Name" style={{width: '500px'}} onChange={(event)=>this.isChange(event)} />
                    <div className="btn btn-info" onClick = {(dl) => this.props.getTextSearch(this.state.tempValue)}>Search</div>
                </div>
                <hr/>
                <div className="btn-group1">
                    {this.AppearForm()}
                </div>
            </div>
        </div>
        <hr />
      </div>
    )
  }
}
