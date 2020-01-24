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
                price: '',
                editing: false
            })
            this.props.history.push('/')
        })
    };



    updateProduct = (img, name, price) => {
        axios.put('/api/product', {img, name, price})
        .then(() => {
            this.setState({
                id: 0,
                img: '',
                name: '',
                price: '',
                editing: true
            })
            this.props.history.push('/')
        })
    };

    render(){
        const {editing, id, img, name, price} = this.state
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
                        <button onClick={() => this.updateProduct(id, img, name, price)}>Save Changes</button>
                    ):(
                        <button onClick={() => this.addProduct(img, name, price)}>Add to Inventory</button>
                    )}
                </div>
            </div>
        )
    }
}

export default Form