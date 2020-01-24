import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Product extends Component{
    delete = id => {
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.props.reRender()
        })
    }

    edit = id => {
        this.props.history.push(`/edit/${id}`)
    }

    render(){
        return(
            <div className='product-container'>
                <img src={`${this.props.productInfo.img}`} alt={`${this.props.productInfo.name}`}/>
                <h1>{this.props.productInfo.name}</h1>
                <h2>${this.props.productInfo.price}</h2>
                <button onClick={() => this.delete(this.props.productInfo.id)}>Delete</button>
                <button onClick={() => this.edit(this.props.productInfo.id)}>Edit</button>
            </div>
        )
    }
}

export default withRouter(Product)