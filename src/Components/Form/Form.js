import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state={
            id: 0,
            url: '',
            name: '',
            price: 0,
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <div className='form-input-container'>
                    <input
                        name='url'
                        onChange={e => this.handleChange(e)}
                        value={this.state.url}
                    />
                    <input
                        name='name'
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                    />
                    <input
                        name='url'
                        onChange={e => this.handleChange(e)}
                        placeholder='0'
                        value={this.state.price}
                    />
                </div>
                <div className='form-btn-container'>
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form