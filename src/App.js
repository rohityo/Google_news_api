import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { findAllByTitle } from '@testing-library/react';

// const { ReactComponent } = require("*.svg");



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  
  componentDidMount() {
    fetch('http://newsapi.org/v2/everything?q=apple&from=2020-07-08&to=2020-07-08&sortBy=popularity&apiKey=88d4f86e316140e089929ed953098371')
      .then((response) => {
        return response.json();
        // console.log(response, "ROHIT");
      })
      .then((data) => {
        this.setState({
          articles: data.articles
        })
      
      })
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
       <div className="header">
          <h1>GOOGLE NEWS..</h1>
        </div><br/>
      {this.state.articles.map((item, index) => {
        return(
            <div>
              <div className="card">
                <img src={item.urlToImage} style={{width:"60%"}}/>
                <div>
                  <h1 className="title">{item.title}</h1>
                  <br/>
                  <p className="author">{item.author}</p><br/>
                  <p>{item.description}</p><br/>
                  <p><button><a href={item.url} target="_blank"><i class="fa fa-dribbble">Read More</i></a></button></p>
                  </div>
              </div>
              <br/>
            </div>
            

        )})
      }
      <a href="#" class="previous">&laquo; Previous</a>
      <a href="#" class="next">Next &raquo;</a>

      </div>
     )}
  // code tester 

  
}

export default App;





