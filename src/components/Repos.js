import React, { Component } from 'react'
import axios from 'axios'

export default class Repos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: this.props.routeParams.lang,
            data: []
        }

    }

    componentDidMount() {
        this.getList()
    }

    getList() {
        axios.get('https://api.github.com/search/repositories?q=' + this.state.lang)
            .then((res) => this.setState({ data: res.data }))
            .then(() => console.log(this.state.data))
    }

    render() {
        var data = this.state.data
        return (
            <div>
                <section className="repos-wrapper">
                    <div className="container">
                        <h1 className="title">{data.total_count} repository's results</h1>

                        <div className="columns">

                            <div className="column is-two-thirds">
                                <div className="repo">
                                    <article className="media">
                                        <div className="media-left">
                                            <div className="media-content">
                                                <div className="content">
                                                    <span className="repoBlock">
                                                        <a>
                                                            <strong>hj</strong>
                                                        </a>
                                                    </span><br />
                                                    <span className="repoBlock">
                                                        description
                                                </span><br />
                                                    <span className="repoBlock">
                                                        updated
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}