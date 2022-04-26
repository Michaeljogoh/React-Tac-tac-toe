import React from 'react'
import {useState} from 'react';

function Tick() {
  const [tak , setTak] = useState('X');

const [space , setSpace] = useState(Array(9).fill(''));
const [winner , setWinner] = useState();

const reset = () =>{
  setSpace(null)
  setSpace(Array(9).fill(''));
 }

const winningCombination = (possible) =>{
  let combos = {
     winning:  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
  };

  for (let combo in combos){
    combos[combo].forEach( box => {
      if( possible[box[0]] === ''|| possible[box[1]] === ''|| possible[box[2]] === '' ) { 
      } else if ( possible[box[0]] === possible[box[1]] &&  possible[box[1]] === possible[box[2]]) {

        setWinner(possible[box[0]]);
      alert('winner')

      }
    });
  }
}


const handleclick = (id) => {

 if(space[id] !== ''){
   alert("clicked")
   return
 }
 
  let square = [...space]
  if(tak ==='X'){
    square[id] = 'X'
    setTak("O");
  } else {
    square[id] = 'O'
    setTak('X')
  }
  setSpace(square)
  winningCombination(square)

  if(square.includes("") === false) {
    alert("draw")
  }
  console.log(square)
 
}
  return (
    <div>
           <section>
            <div class="container">
                <div onClick = {() =>handleclick (0)} class="cell">{space[0]}</div>
                <div onClick = {()=> handleclick(1)}class="cell" >{space[1]}</div>
                <div onClick = {() => handleclick (2)}class="cell">{space[2]}</div>
                <div  onClick = {() =>handleclick(3)} class="cell">{space[3]}</div>
                <div onClick = {() => handleclick(4)} class="cell">{space[4]}</div>
                <div onClick = {() =>handleclick(5)} class="cell" >{space[5]}</div>
                <div onClick = {() =>handleclick(6)}class="cell"> {space[6]}</div>
                <div onClick = {() =>handleclick(7)} class="cell">{space[7]}</div>
                <div onClick = {() =>handleclick(8)}class="cell">{space[8]}</div>
            </div>
            <h2 class="status"></h2>
            <button class="restart" onClick={() => reset()}>Restart Game</button>
        </section>
    </div>
  )
}

export default Tick