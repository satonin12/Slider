import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (

      <div className="wrapper">
        <SayFullName name="Vlad" surname="Satonin" link="vk.com" />
        <SayFullName name="Arnold" surname="Vasilieva" link="fb.com" />
        <SayFullName name="Max" surname="Lavrentieva" link="yandex.com" />
        <SayFullName name="Petya" surname="Byzova" link="#" />
      </div>

      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

function Hello(){
  let abv = "mazafaka !!! ;-p"
  return (
      <h1>Hello World! {abv} </h1>
  )
}

function SayFullName(props){
  return (
      <div>
      <h1>Мое имя - {props.name}, фамилия - {props.surname} </h1>
      <a href = {props.link}> Ссылка на мой профиль </a>
      </div>
  )
}

function MeetAll(){
  return (
      <div>
          <SayFullName name="Vlad" surname="Satonin" link="vk.com" />
          <SayFullName name="Arnold" surname="Vasilieva" link="fb.com" />
          <SayFullName name="Max" surname="Lavrentieva" link="yandex.com" />
          <SayFullName name="Petya" surname="Byzova" link="#" />
      </div>
  )
}

export default App;
