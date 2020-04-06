import React, { Component } from 'react'
import Header from '../common/Header'
import  Image  from '../assets/img/asus.jpg'

class Home extends Component{

render(){
    return (
        <div>
        <Header
            title = "Welcome to Game Flix Studio"
            subtitle ="We meet Customer needs"
            buttonText = "Shop Now"
            link = "/services"
            showButton = { true }
            image = { Image }
         />
        </div>
    );
}

}

export default Home
