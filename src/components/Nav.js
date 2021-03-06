import React, { Component } from 'react'
import logo from '../images/logo.png'
const Link = require('react-router').Link;


class Nav extends Component {





  render() {
    return (
      <div>
        <div className="header-wrapper">
          <div className="container">
            <div className="header-data box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <Link to={'/'}>
                      <img src={logo} alt="Avatar" />
                    </Link>
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

                      </p>
                      <a className="level-item" target="_blank">
                        <span className="icon is-small"><i className="fa fa-link"></i></span>

                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-envelope"></i></span>

                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>


    );
  }
}

export default Nav