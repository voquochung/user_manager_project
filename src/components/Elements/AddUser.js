import React, { Component } from 'react'

export default class AddUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }

  isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      this.setState({
        [name]:value
      });
    
  }

  Check = () => {
    if(this.props.AppearForm === true){
      return (
        <div className="col">
          <form>
            <div className="card text-left">
              <div className="card text-white border-primary mb-3">
                <div className="card-header text-center bg-primary">Add User</div>
                  <div className="card-body text-primary">
                      <div className="form-group">
                        <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control"  placeholder="Name User" />                                
                      </div>
                      <div className="form-group">
                        <input type="text" onChange={(event)=>this.isChange(event)} name="tel" className="form-control"  placeholder="Phone Number" />
                      </div>
                      <div className="form-group">                                              
                        <select className="custom-select" onChange={(event)=>this.isChange(event)} name="Permission">
                          <option value={0}>Authendicate</option>
                          <option value={1}>Admin</option>
                          <option value={2}>Moderator</option>
                          <option value={3}>Normal User</option>
                        </select>                                    
                      </div>
                      <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission)=>this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Add"/>
                      </div>
                  </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.Check()}
      </div>
    )
  }
}
