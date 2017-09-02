import React, { Component } from 'react'
import { CardStack, Card } from 'react-cardstack'
import JS from '../images/js.png'
import PY from '../images/python-logo.png'
import Java from '../images/Java.png'
import PHP from '../images/php.png'
import Ruby from '../images/ruby.png'
import Language from './Language'
const Link = require('react-router').Link;

export default class TechList extends Component {

    constructor() {
        super();
    }




    render() {
        return (
            <div>
                <section className="repos-wrapper">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-two-thirds">
                                <div className="repo">

                                    <CardStack
                                        height={600}
                                        width={500}
                                        background='#f8f8f8'
                                        hoverOffset={20}>

                                        <Card background='#fafafa'>
                                            <Link to={'/technology/javascript'}>
                                            <article className='media'>
                                                <div className="media-left">
                                                    <figure className="image is-64x64">
                                                        <img src={JS} alt="JS" />
                                                    </figure>

                                                </div>
                                                <div className="media-right">
                                                    <div className="media-content">
                                                        <div className="content">
                                                            <h1>JavaScript</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            </Link>
                                        </Card>

                                        <Card background='#fafafa'>
                                        <article className='media'>
                                            <div className="media-left">
                                                <figure className="image is-64x64">
                                                    <img src={PY} alt="JS" />
                                                </figure>

                                            </div>
                                            <div className="media-right">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <h1>Python</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Card>
                                    <Card background='#fafafa'>
                                            <article className='media'>
                                                <div className="media-left">
                                                    <figure className="image is-64x64">
                                                        <img src={Java} alt="JS" />
                                                    </figure>

                                                </div>
                                                <div className="media-right">
                                                    <div className="media-content">
                                                        <div className="content">
                                                            <h1>Java</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Card>
                                        <Card background='#fafafa'>
                                            <article className='media'>
                                                <div className="media-left">
                                                    <figure className="image is-64x64">
                                                        <img src={PHP} alt="JS" />
                                                    </figure>

                                                </div>
                                                <div className="media-right">
                                                    <div className="media-content">
                                                        <div className="content">
                                                            <h1>PHP</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Card>
                                        <Card background='#fafafa'>
                                            <article className='media'>
                                                <div className="media-left">
                                                    <figure className="image is-64x64">
                                                        <img src={Ruby} alt="JS" />
                                                    </figure>

                                                </div>
                                                <div className="media-right">
                                                    <div className="media-content">
                                                        <div className="content">
                                                            <h1>Ruby</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Card>





                                    </CardStack>

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

