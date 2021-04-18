import './App.css';
import{MyData, isArrayEmpty as isEmpty} from './myData';
import React, { Component } from 'react';

console.clear()

class App extends Component {
  state = {
    show : true,
    myArray : [
      {
        id: 1,
        title: 'Title 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        likeCount: 0
      },
      {
        id: 2,
        title: 'Title 2',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        likeCount: 0
      },
      {
        id: 3,
        title: 'Title 3',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        likeCount: 0
      },
      {
        id: 4,
        title: 'Title 4',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        likeCount: 0
      }
    ]
  }
  

  onClickHide = () => {
    this.setState((prevState) => {
      return(
        {
          show: !prevState.show
        }
      )    
    })
  }

  onLikeBtnCLick = (pos) => {
    const updatedArray = this.state.myArray
    const updatedObj = updatedArray[pos]
    updatedObj.likeCount = updatedObj.likeCount+1

    updatedArray[pos] = updatedObj
    this.setState({myArray: updatedArray})
  }

  
  render(){
    const arrIter = isEmpty( this.state.myArray) ? []: this.state.myArray.map((item, pos) => {
      return (      
        // all the attributes are passed to the MyData module in myData in the form of key-value pair
        <MyData className={'article'} id={item.id} title={item.title} description={item.description} likeCount={item.likeCount} likeClick={() => this.onLikeBtnCLick(pos)} />
        
        // The above code is converted to JS and is in the form:
  
        // React.createElement(MyData, {
        //   className: 'article',
        //   id: item.id,f
        //   title: item.title,
        //   description: item.description
        // });
      )
    })
    return (
      <div className="App">
        <button onClick={this.onClickHide}>{this.state.show ? 'Hide Blocks' : 'Show Blocks'}</button> <br/>  
        {
          this.state.show ? arrIter : null
        }
      </div>
    );
  }
}

export default App;
