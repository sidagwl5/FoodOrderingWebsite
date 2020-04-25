import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Food1 from "../images/Food1.jpg"



export default class OpeningPage extends Component {


    render() {
        return (

            <div className = "openingPage-main">
               
                  <div className = "openingPage-submain1">

                      <div className = "openingPage-part1">

                          <div>
                          </div>

                          <div>
                              <h1>Food Catering</h1>
                              <span className = "openingPage-span1"></span>
                              <span className = "openingPage-span2"></span>
                          </div> 

                          <div>
                              <p>
                                  Food is the ingredient that <span>binds</span> us together
                              </p>
                          </div>         
                      </div>

                      <div className = "openingPage-part2">

                          <h1>About</h1>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>

                          <Link to = "/menu"><button>Menu</button></Link>
                      </div>   

                  </div>

            </div>
        )
    }
}
