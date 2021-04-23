import React, { Component } from 'react';

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productID: '',
            quantity: 0
        }
    }

    addToCart = (pid) => {
        this.setState({
            productID: pid,
            quantity: this.state.quantity + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addToCart(1)}>Add To Cart</button>
                <Cart productID={this.state.productID} quantity={this.state.quantity}></Cart>
            </div>
        );
    }
}

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.quantity
        }
    }

    // updateQuantity = () => {
    //     this.setState({
    //         quantity: this.state.quantity + 1
    //     })
    // } // we already done this in product class

    static getDerivedStateFromProps(props, state){
        console.log(props.quantity);
        console.log(state.quantity);

        if (props.quantity !== state.quantity){
            return {
                quantity: props.quantity
            }
        }
        return null;
    }

    componentDidMount() {
        console.log("Component did mount by cart class");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update by cart class");
    }

    render() {
        return (
            <div>
                <h1>Cart Value: {this.state.quantity}</h1>
                <button onClick={this.updateQuantity}>Quantity update</button>
            </div>
        );
    }
}

export default Product;