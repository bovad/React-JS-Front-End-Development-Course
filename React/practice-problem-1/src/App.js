import logo from './amazon.png';
import ProductData from './ProductData';
import React, {Component} from 'react';
import Watch from './watch';
import Features from './Features'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      watchUrl : ProductData.colorOptions[0].imageUrl,
      featureText : 'Time'
    }
  }

  onImageClick = (url) => { 
    this.setState({
      watchUrl: url
    })
  }
  
  Watches = ProductData.colorOptions.map((colorType,pos) => {
    return(
      <button className="watch-btn" onClick={() => this.onImageClick(colorType.imageUrl)} key={pos}><img src={colorType.imageUrl} alt={colorType.styleName} /> </button>
    )
  });
  
  features = ProductData.featureList.map((feature, pos) => {
    return(
      <button className="btn" onClick={() => this.changeFeature(feature)} key={pos}>{feature}</button>
    )
  }); 

  changeFeature = (feat) => {
    console.log(feat)
    this.setState({featureText: feat})
  }

  render(){
    return (
      <div className="App">
        <header>
          <img src={logo} alt="amazon.png"/>
        </header>
        <div className="main">
          <aside>
            <Watch watchUrl={this.state.watchUrl} />
            <Features text={this.state.featureText} />
          </aside>
          <section>
            <h1>{ProductData.title}</h1>
            <p>{ProductData.description}</p>
            <h3 style={
              {
                padding: 0,
                margin: 0
              }
            }>Select Color</h3>
            <div className='watches'>
              {this.Watches}
            </div>
            <h3>Features</h3>
            <div className="features flex">
              {this.features}
            </div>
            <button className="btn" id="buy">Buy Now</button>
          </section>
        </div>
        
      </div>
    )}
}

export default App;
