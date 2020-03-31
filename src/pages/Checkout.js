import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Checkout extends Component {

  state = {

    bill: []
  }

  componentDidMount() {

    if (window.localStorage.getItem("bill")) {

      this.setState({

        bill: JSON.parse(window.localStorage.getItem("bill"))
      })

    } 


  }

  handle() {

    return this.state.bill.map(v => {

      return (

        <div className="checkout-submain">

          <div className="part">
            <p>{v.meal}</p>
          </div>

          <div className="part">
            <p>{v.quantity}</p>
          </div>

          <div className="part">
            <p>{v.number}</p>
          </div>

          <div className="part">
            <p>{v.price}</p>
          </div>

        </div>
      )
    })
  }

  handleTotalPrice() {

    var total = 0;

    if (this.state.bill) {

      this.state.bill.forEach(v => {

        total = total + v.price
      })

      return (

        <div className="checkout-submain">

          <div className="part">
          </div>

          <div className="part">
          </div>

          <div className="part">
            TOTAL
             </div>

          <div className="part">
            {total}
          </div>

        </div>
      )
    }
    else {

      return null;
    }

  }

  handleButton() {

    if (this.state.bill) {

      return (

        <div style = {{backgroundColor : "transparent"}} className="checkout-submain">
           <div className="part">
          </div>

          <div className="part">
          </div>

          <div className="part">
             </div>

          <div className="part">
          <Link style = {{backgroundColor : "orange", color : "white", 
          padding : "10px", borderRadius : "5px"}} to="/">Pay</Link>
          </div>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="checkout-main">
        <h1>Bill</h1>

        {this.handle()}
        {this.handleTotalPrice()}
        {this.handleButton()}
      </div>
    )
  }
}
