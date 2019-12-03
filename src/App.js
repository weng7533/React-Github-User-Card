import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';


class App extends React.Component {

  state = {
    users: [],
    usersFollowers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/weng7533')
      .then(response => {

        this.setState(
          {
            users: response.data
          }
        )
      })
      .catch(error => {
        console.log(error)
      });

    axios.get('https://api.github.com/users/weng7533/followers')
      .then(response => {
        console.log('https://api.github.com/users/weng7533/followers', response.data)
        response.data.map((follower, index) => {
          axios.get(`https://api.github.com/users/${follower.login}`)
            .then(res => {
              this.setState({ usersFollowers: [...this.state.usersFollowers, res.data] })
            })
        })

      })
      .catch(error => {
        console.log(error)
      });



  }



  render() {
    console.log('this.state.users', this.state.users)
    console.log('followers', this.state.usersFollowers)
    return (
      <div className="App">


        <Card user={this.state.users} />
        {
          this.state.usersFollowers.map((user, index) => {
            return <Card user={user} index={index} />
          })
        }

      </div>
    );
  }

}


export default App;
