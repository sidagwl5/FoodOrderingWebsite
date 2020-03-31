import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Food1 from "../images/Food1.jpg"



export default class FoodCatering extends Component {


    render() {
        return (

            <div>
                <div className="responsive-main1">

                    <div className="responsive-submain1">

                    </div>

                    <div className="responsive-submain2">

                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h1 className = "content rellax" data-rellax-speed = "5">FOOD ORDERING</h1>

                            <Link className = "content rellax" data-rellax-speed = "3" 
                            style={{ color: "white", padding: "10px", marginTop: "1%", textAlign: "center", 
                            border: "1.5px white solid", backgroundColor: "rgba(0,0,0,0.1)", textDecoration: "none" }} to = "/menu" >START ORDERING</Link>
                        </div>

                    </div>

                </div>

                <div className="responsive-main2">

                    <div data-aos="fade-right" className="responsive-submain3">
                        <img src={Food1} />
                        <h2>WHAT IS FOOD ORDERING</h2>
                        <p>
                            Online food ordering is the process of ordering food from a website or other application.
                            The product can be either ready-to-eat food or food that has not been specially prepared for direction consumption.

                            A customer can choose to have the food delivered or for pick-up.
                            The process consists of a customer scanning the menu items, choosing an item, and finally choosing for pick-up or delivery.
                            Payment is then administered by paying with a credit card or debit card through the app or website or in cash at the
                            restaurant when going to pickup.
              </p>
                    </div>


                </div>

            </div>
        )
    }
}
