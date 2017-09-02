import React, {Component} from 'react'
import { CardStack, Card } from 'react-cardstack';

export default class TechList extends Component {

    constructor(){
        super();
    }

    
    

    render(){
        return(
            <div>
                <CardStack
                    height={300}
                    width={500}
                    background='#f8f8f8'
                    hoverOffset={0}>

                    <Card background='#2980B9'>
                        <h1>Number 1</h1>
                    </Card>

                    <Card background='#27AE60'>
                        <h1>Number 2</h1>
                    </Card>

                </CardStack>
            </div>
        )
    }
}

