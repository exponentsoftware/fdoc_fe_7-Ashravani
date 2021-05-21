import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "sid sriram", album_title: "Geetha Govindam", album_cover: "Geetha Govindam", songs: "song"},
        {id: 2, artist: "Arijith Singh", album_title: "phir kabhi", album_cover: "M.s. Dhoni", songs: "song1"},
        {id: 3, artist: "Armaan Malik", album_title: "Jab Tak", album_cover: "M.s.Dhoni", songs: "song2"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
    console.log('Hi from receiver method = pushed new album');
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
    console.log('Hi from receiver method = pushed new album');
    console.log('Hi from delete method');
  }
  render() {
    return (
      
      <div className="App">
        <AddAlbum receiveFunc = {this.receiver}/>
      
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
    )
  }
}

export default App
