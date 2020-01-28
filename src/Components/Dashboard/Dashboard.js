import React, {Component} from 'react';
// import{Link} from 'react-router-dom';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            inventory:[]
        }
    }

    componentDidMount() {
        this.reRender()
    }

    reRender = () => {
        axios.get('/api/inventory').then(res => this.setState({
            inventory: res.data
        }))
    }

    render(){
        return(
            <div>
                {this.state.inventory.map(element => {
                    return <Product
                                key={element.id}
                                productInfo={element}
                                reRender={this.reRender}
                           />
                })}
            </div>
        )
    }
}

export default Dashboard;