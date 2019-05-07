import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';

import Header from '../Elements/Header';
import Search from '../Elements/Search';
import Table from '../Elements/Table';
import AddUser from '../Elements/AddUser';

import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      AppearForm: false,
      data: [],
      textSearch:'',
      editUserStatus: false,
      userEditObject:{}
    }
  }

  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {   
    if(value.id === info.id){
      value.name = info.name;
      value.tel = info.tel;
      value.Permission = info.Permission;
    }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  getNewUserData = (name, tel, Permission) => {
      // pakage to item
      var item={};
      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.Permission = Permission;

      var items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      })
      localStorage.setItem('userData', JSON.stringify(items));
  }

  getTextSearch = (dl) => {
      this.setState({
        textSearch: dl
      })
  }
  
  ChangeStatusForm = () => {
    this.setState({
      AppearForm: !this.state.AppearForm
    });
  }

  render() {
    var result = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.textSearch) !== -1){
        result.push(item);
      }
    })
    return (
      <Container fluid className={classNames('content', {'is-open': this.props.isOpen})}>
        <NavBar toggle={this.props.toggle}/>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search Connect={()=>this.ChangeStatusForm()} AppearForm={this.state.AppearForm} getTextSearch={(dl)=>this.getTextSearch(dl)} 
              editUserStatus={this.state.editUserStatus} changeEditUserStatus={()=>this.changeEditUserStatus()}
              userEditObject={this.state.userEditObject} getUserEditInfoApp = {(info)=> this.getUserEditInfoApp(info)}/>
              <Table deleteUser={(idUser)=>this.deleteUser(idUser)} editFun={(user)=>this.editUser(user)} DataUserProps={result} changeEditUserStatus={()=>this.changeEditUserStatus()}/>
              <AddUser add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)} AppearForm={this.state.AppearForm}/>
            </div>
          </div>
        </div> 
      </Container>
    );
  }
}

export default Content;
