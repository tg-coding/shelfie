import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super()
        this.state={
            id: 0,
            img: '',
            name: '',
            price: '',
            editing: false
        }
    };

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    };

    cancel = () => {
        this.setState({
            img: '',
            name: '',
            price: '',
        });
    }

    addProduct = (name, price, img) => {
        axios.post('/api/product', {name, price, img})
        .then.setState({
            id: 0,
            name: '',
            price: '',
            img:'',
            editing: false
        })
        this.props.history.push('/')
    }

    render(){
        const {editing, id, name, price, img} = this.state
        return(
            <div>
                <div className='form-input-container'>
                    <h1>Image URL:</h1>
                    <input
                        name='img'
                        onChange={e => this.handleChange(e)}
                        value={this.state.img}
                        input type='text'
                        
                    />
                    <h1>Product Name:</h1>
                    <input
                        name='name'
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                        input type='text'
                    />
                    <h1>Price:</h1>
                    <input
                        name='price'
                        onChange={e => this.handleChange(e)}
                        placeholder='0'
                        value={this.state.price}
                        input type='number'
                    />
                </div>
                
                <div className='form-btn-container'>
                    
                    <button onClick={() => this.cancel()}>Cancel</button>
                    
                    {editing ? (
                        <button>Update Product</button>
                    ):(
                        <button onClick={() => this.addProduct(name, price, img)}>Add to Inventory</button>
                    )}

                </div>
            </div>
        )
    }
}

export default Form