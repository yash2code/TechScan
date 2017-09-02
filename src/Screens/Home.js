import React, {Component} from 'react'
import Nav from '../components/Nav'
import TechList from '../components/TechList'

export default class Home extends Component {

    constructor(){
        super();
    }

    
    

    render(){
        return(
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <TechList />
                </div>
            </div>
        )
    }
}

