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

                <div className='product-img-bkgd'>
                    <img id='product-img' src={`${this.props.productInfo.img}`} alt={`${this.props.productInfo.name}`}/>
                </div>

                <div className='product-info-container'>
                    <div className='product-text'>
                        <h1>{this.props.productInfo.name}</h1>
                        <h2>${this.props.productInfo.price}</h2>
                    </div>
                    <div className='btn-container'>
                        <button id='delete-btn' onClick={() => this.delete(this.props.productInfo.id)}>Delete</button>
                        <button id='edit-btn' onClick={() => this.edit(this.props.productInfo.id)}>Edit</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Product)