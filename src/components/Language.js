import React, { Component } from 'react'
import axios from 'axios'
const Link = require('react-router').Link;
const data = ['JavaScript', 'Python', 'Java', 'PHP','Ruby','C','C++','Go','HTML','C#']

export default class Language extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            count:[]
        }
    }

    componentDidMount(){
        this.getCount()
    }

    getLang() {
        this.state.data.map(function (player) {
            return <li key={player}>{player}</li>

        })
    }

    getCount() {
        this.state.data.map((lang,i)=>{
        axios.get('https://api.github.com/search/repositories?q='+lang)
            
            .then((res)=><li key={i}>{res.data.total_count}</li>)
        })
    }



    render() {
        return (
            <div>
                <div>
                    <div className='card langCard'>
                        <div className='lang-card-header'>
                            <p className='title is-4'>
                                Languages
                                </p>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <section className='section'>


                                    <aside className="menu">
                                        <ul className="menu-list">

                                            {this.state.data.map(function (lang, i) {
                                                return <div><li key={i}><Link to={'/technology/' + lang }>{lang}</Link></li><br/></div>;
                                            })}
                                        </ul>
                                    </aside>
                                </section>
                            </div>

                            <div className="media-right">
                                <section className='section'>
                                    <aside className="menu">
                                        <ul className="menu-list">
                                       { this.state.data.map((lang,i)=>{
        axios.get('https://api.github.com/search/repositories?q='+lang)
            
            .then((res)=><li key={i}>{res.data.total_count}</li>)
        })}

                                        </ul>
                                    </aside>
                                </section>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}