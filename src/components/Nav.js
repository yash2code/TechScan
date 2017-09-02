import React, {Component} from 'react'
import axios from 'axios'
import logo from '../images/logo.png'

class Nav extends Component{

  constructor(){
    super();
    this.state={
      loaded:true
    }
  }
  
  
 /* componentDidMount(){
    this.getHeaderData()
  }
  getHeaderData() {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders')
      .then(function (response){
        let headData = response.data;
        this.processHeaderData(headData)
      }.bind(this)).catch(function(error) {
        console.log(error);
      })
  }
  processHeaderData(headData) {
    this.setState({loaded: true, name: headData.name, avatar: headData.avatar_url, location: headData.location, url: headData.blog, email: headData.email});
  }*/
  render(){
    if (!this.state.loaded) {
      return (
        <div className="container">
          <div className="loading-icon">
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="header-wrapper">
        <div className="container">
          <div className="header-data box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={logo} alt="Avatar" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h1>
                    <strong>TechScan</strong>
                  </h1>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <p className="level-item">
                      <span className="icon is-small"><i className="fa fa-map-marker"></i></span>
                      {this.state.location}
                    </p>
                    <a className="level-item" href={this.state.url} target="_blank">
                      <span className="icon is-small"><i className="fa fa-link"></i></span>
                      {this.state.url}
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                      {this.state.email}
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>


    );
  }
}

export default Nav