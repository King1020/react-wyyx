import React,{Component} from 'react'
import{Switch,Route,Redirect}from "react-router-dom";
import Classify from './pages/Classify/Classify'
import HomePage from './pages/HomePage/HomePage'
import Know from './pages/Know/Know'
import Person from './pages/Person/Person'
import ShopCart  from './pages/ShopCart/ShopCart'
import Footer from './components/footer/footer'
// import Header from './components/header/header'
class App extends Component {
    render(){
        return (
            <div>
            {/* <Header/> */}
          <Switch >
            <Route path='/homepage' component={HomePage}/>
            <Route path='/classify' component={Classify}/>
            <Route path='/know' component={Know}/>
            <Route path='/person' component={Person}/>
            <Route path='/shopcart' component={ShopCart}/>
            <Redirect to='/homepage' />
         </Switch>
            <Footer />
            </div>
        )

    }
}
export default App