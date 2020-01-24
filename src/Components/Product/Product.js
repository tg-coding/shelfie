import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component{
    delete = id => {
        axios.delete('')
    }

    render(){
        return(
            <div className='product-container'>
                <img src={`${this.props.productInfo.img}`} alt={`${this.props.productInfo.name}`}/>
                <h1>{this.props.productInfo.name}</h1>
                <h2>{this.props.productInfo.price}</h2>
            </div>
        )
    }
}

export default Product