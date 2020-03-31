import React, { Component } from 'react';
import Axios from "axios";
import arr from "../components/quantity/Quantity";
import {Link} from "react-scroll";
import AOS from "aos";
import * as navigate from "../components/Navigation/Navigate";
import Circle from "../pages/Circle";


export default class Menu extends Component {

    state = {

        payout: [],
        meals: [],
        option: arr
    }

    componentDidMount() {

        window.localStorage.removeItem("bill");

        Axios({

            url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
            method: "GET"
        }).then(res => {

            console.log(res.data.meals)
            this.setState({

                meals: res.data.meals,
               
            })

        })

        AOS.init();
    }



    handlePayout(type, price, name){
  
        const data = {

            meal : name,
            quantity : type,
            price : price,
            number : 1
        }

        
        const bool = this.state.payout.findIndex(v => {

               return (v.meal == data.meal && v.quantity == data.quantity)

        });

       console.log(bool);
        if(bool == -1){

                this.setState({

                      payout : [...this.state.payout, data]
                })
        }


      else{

           var arr = this.state.payout;
           var val = arr.splice(bool, 1);
          
           val[0].price = val[0].price + data.price
           val[0].number = val[0].number + data.number

           this.setState({

                 payout : [...arr, ...val]
           })
      }
        
    }

    handleOptions(name){

        window.localStorage.setItem("bill", JSON.stringify(this.state.payout));
        if(this.state.option){

            return this.state.option.map(v => {

                   return(
                    
                         <div style = {{width : "100%", backgroundColor : "#ff6663", display : "flex",
                          height : "35px", marginBottom : "10px"}}>

                             <div style = {{width : "33%", height : "100%", display : "grid", placeItems : "center"}}> 
                             <p style = {{marginTop : "5px"}}>{v.type}</p>
                             </div>

                             <div style = {{width : "33%", height : "100%", display : "grid", placeItems : "center"}}>
                             <p style = {{marginTop : "5px"}}>{v.price}</p>
                             </div>

                             <div style = {{width : "33%", height : "100%", display : "flex", justifyContent : "center" }}>
                             <button onClick = {() => {this.handlePayout(v.type, v.price, name)}} style = {{backgroundColor : "#ff6663", color : "white" ,border : "none"}}>{v.quantity}</button>
                             </div>
                               
                          </div>   
                   )

            })

        }
    }

    handleMeals() {


        if (this.state.meals.length != 0) {

            return this.state.meals.map(v => {


                return (

                    <div data-aos = "fade-left" key = {v.idMeal} className="menu-card">
                        <img src={v.strMealThumb} />
                        <h2 style={{ fontSize: "20px", textAlign: "center", marginTop: "20px" }}>{v.strMeal}</h2>
                        <p style={{ textAlign: "justify", width: "90%", marginTop: "10px" }}>

                            Click on "ADD" button to add food in cart. Click on "Go to cart" button to check your cart

                           </p>
                       
                        {this.handleOptions(v.strMeal)}                        
                       
                    </div>
                )
            })
        }
        else{

            return <Circle />
        }
    }

    handleAllOptionCart(array){

              return array.map(v => {

                    return(

                        <div style = {{position : "relative", width : "25%" ,display : "flex", 
                        justifyContent : "center", alignItems : "center"}}>
                            <p>{v}</p>
                        </div>    
                    )
              })
         
    }

    handleCart(){

          if(this.state.payout.length != 0){
            
              

              return (

                   this.state.payout.map(v => {

                        return(

                            
                             <div style = {{position : "relative",width : "80%",paddingTop : "10px" ,display : "flex", alignItems : "center", justifyContent : "space-between" ,
                             backgroundColor : "white", borderBottom : "1px black solid"}}>

                                                        
                               {this.handleAllOptionCart([v.meal, v.quantity, v.price, v.number])} 
                               
                             </div>  
                        
                        )
                        
                  })
              )


             
          }

          else{

              return(

                <p style = {{color : "white", fontSize : "20px"}}>Your cart is empty. All the items of your cart will be visible here</p>
              )
          }
    }

    render() {

        return (
            <div>
              
            <div className="menu-main">

            <Link to = "cart" smooth duration = {1000} style = {{position : "fixed",top : "88%", left : "93%",
            backgroundColor : "#aaaaaa", padding : "10px", borderRadius : "5px", color : "white"}}>Go to Cart</Link>
                <div className="menu-submain1">
                    <h1>MENU</h1>

                    <div className="menu-submain1-part1">
                        {this.handleMeals()}
                    </div>
                </div>
               
            </div>

            <div className = "cart">
            <div style = {{width : "80%", backgroundColor : (this.state.payout.length != 0)? "white" : "transparent" ,
            display : "flex", flexDirection : "column",alignItems : "center" ,justifyContent : "center", margin : "50px", borderRadius : "10px"}}>
               
                {this.handleCart()}
              
            </div>
            <Link style = {{ cursor : "pointer", marginBottom : "20px"}} to = "menu-main" smooth duration = {1000}>GO TO MENU</Link>  
            <navigate.Link to = "/checkout">Checkout</navigate.Link>  
            </div>    
            </div>
        )
    }

}
