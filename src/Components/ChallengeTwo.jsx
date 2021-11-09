import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({
        arr:studentList
      })
    }, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const newArray = this.shuffle(this.state.arr)
    this.setState({
      arr: [...newArray]
    })

  }

  shuffle = (array) => {
    for(let i = array.lenght -1; i > 0; i--){
      const rand = Math.floor(Math.random() * (i+1))
      ;[array[i],array[rand]] = [array[rand],array[i]]
    }

    return array
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {
              this.state.arr.map((student,index) => (
                <li key={index}>{student}</li>
              ))
            }
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
