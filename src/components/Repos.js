import React, { Component } from 'react'
import axios from 'axios'
import Language from './Language'
const Link = require('react-router').Link;

export default class Repos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: this.props.routeParams.lang,
            data: [],
            count: ''
        }

    }

    componentDidMount() {
        this.getList()
    }

    getList() {
        axios.get('https://api.github.com/search/repositories?q=' + this.state.lang)
            .then((res) => this.setState({ count: res.data.total_count, data: [...res.data.items] }))
            .then(() => console.log(this.state.data))
    }

    render() {
        var data = this.state.data
        return (
            <div>
                <section className="repos-wrapper">
                    <div className="container">
                        <h1 className="title">{this.state.count} repository's results</h1>

                        <div className="columns">

                            <div className="column is-two-thirds">
                                <div className="repo">
                                    {data.map(function (data, i) {
                                        return <article key={i} className="media">
                                            <div className="media-left">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <span className="repoBlock">

                                                            <strong className="title is-4 is-info"><Link to={'/profile/' + data.owner.login}>{data.full_name}</Link></strong>

                                                        </span><br />
                                                        <span className="repoBlock">
                                                            {data.description}
                                                        </span><br />
                                                        <span className="repoBlock">
                                                            {data.updated_at}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <nav className="level">
                                                    <div className="level-left">
                                                        <p className="level-item">
                                                            <span className="icon is-small"><i className="fa fa-circle"></i></span>
                                                            {data.language}
                                                        </p>



                                                        <a className="level-item" target="_blank">
                                                            <span className="icon is-small"><i className="fa fa-star"></i></span>
                                                            {data.stargazers_count}
                                                        </a>
                                                    </div>
                                                </nav>
                                            </div>
                                        </article>
                                            ;
                                    })}

                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <Language />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}