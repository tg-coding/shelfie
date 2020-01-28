import React, {Component} from 'react';
import axios from 'axios';
import defaultImage from '../../DevMountain.jpg'

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

    componentDidMount(){
        if(this.props.match.params.id){
            axios.get(`/api/product/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res.data.id,
                img: res.data.img,
                name: res.data.name,
                price: res.data.price,
                editing: true
            })).catch(err => console.log(err))
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
    };


    addProduct = (img, name, price) => {
        axios.post('/api/product', {img, name, price})
        .then(() => {
            this.setState({
                id: 0,
                img: '',
                name: '',
                price: 0,
                editing: false
            })
            this.props.history.push('/')
        })
    };


    updateProduct = (id, img, name, price) => {
        // console.log(this.props)
        axios.put(`/api/product/${id}`, {img, name, price})
        .then(() => {
            this.setState({
                id: 0,
                img: '',
                name: '',
                price: 0,
                editing: false
            })
            this.props.history.push('/')
        })
    };


    render(){
        const {editing, id, img, name, price} = this.state
        return(
            <div className='form-container'>
                <div className='preview-container'>
                    {this.state.img
                        ? <img id='preview-img'
                            style={{backgroundImage: `url('${this.state.img}')`}}/>
                        : <img id='preview-no-img' 
                            style={{backgroundImage: `url('https://img.icons8.com/material-outlined/50/000000/image.png')`}}/>
                    }
                </div>
                <div className='form-input-container'>
                    <h2>Image URL:</h2>
                    <input
                        name='img'
                        onChange={e => this.handleChange(e)}
                        value={this.state.img}
                        input type='text'
                    />
                    <h2>Product Name:</h2>
                    <input
                        name='name'
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                        input type='text'
                    />
                    <h2>Price:</h2>
                    <input
                        name='price'
                        onChange={e => this.handleChange(e)}
                        placeholder='0'
                        value={this.state.price}
                        input type='number'
                    />
                </div>
                
                <div className='form-btn-container'>
                    
                    <button id='cancel-btn' onClick={() => this.cancel()}>Cancel</button>

                    
                    {editing ? (
                        <button id='editing-btn' onClick={() => this.updateProduct(id, img, name, price)}>Save Changes</button>
                    ):(
                        this.state.img ? (<button id='editing-btn' onClick={() => this.addProduct(img, name, price)}>Add to Inventory</button>
                        ) : (
                            <button id='editing-btn' onClick={() => this.addProduct('https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319', name, price)}>Add to Inventory</button>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Form





//https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319