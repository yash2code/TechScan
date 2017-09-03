import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.routeParams.user,
            data: []
        }


    }

    componentDidMount() {
        this.getUser()
    }


    getUser() {
        axios.get('https://api.github.com/search/users?q=' + this.state.user)
            .then((res) => this.setState({ data: [...res.data.items] }))
    }

    render() {

        var user = this.state.data
        return (

            <div>
                {user.map(function (user, i) {
                    return <div key={i} className="container profile-wrapper">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="profile-info">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-230x230">
                                                <img src={user.avatar_url} alt="profile_pic" />
                                            </figure>


                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-3"></p>
                                                    <p className="subtitle is-5">{user.login}</p>
                                                </div>
                                            </div>
                                            <div className="content"></div>
                                            <div className="followers-following">
                                                <a className="level-item">
                                                    0
                                                    <span>Followers</span>
                                                </a>
                                                <a className="level-item">
                                                    0
                                                    <span>Following</span>
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        )
    }

}
