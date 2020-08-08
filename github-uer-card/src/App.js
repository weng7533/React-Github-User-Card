import React, { Component } from 'react';
import UserCardList from './UserCardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        myData: '',
        myfollowerData: ''
      }
    };
  }

  componentDidMount() {
    console.log('Mount')
    const getData = () => {
      fetch('https://api.github.com/users/weng7533')
        .then(res => res.json())
        .then(data => {
          this.setState({
            data: {
              ...this.state.data,
              myData: data
            }
          })
        }
        );
    }
    const getFollowersData = () => {
      fetch('https://api.github.com/users/weng7533/followers')
        .then(res => res.json())
        .then(data => {

          this.setState({
            data: {
              ...this.state.data,
              myfollowerData: data
            }
          })
        }
        );
    }
    getData();
    getFollowersData();
  }

  render() {

    return (
      <>



        < UserCardList data={this.state.data} />
      </>
    )
  }
}



export default App;
