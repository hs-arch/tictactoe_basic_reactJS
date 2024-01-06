import React from 'react'
import Square from './Square'
import './Board.css'
import './Square.css'
import { useState } from 'react'

const Board = () => {

    const[squares, setSquares] = useState(Array(9).fill(null))
    const[isNext, setIsNext] = useState(true);

    // const status = ' Next Player : ' + (isNext?"X":"O");

    const handleClick = (i:any) => {

        // console.log(isNext);
        
        const newSquares = squares.slice();
        if(isNext)
        {
            newSquares[i] = "X"
            setIsNext(false)
        }
        else
        { 
            newSquares[i] = "O"
            setIsNext(true)
        }
        setSquares(newSquares);
        console.log(i, " was clicked");
    }

    
    // const renderSquare = (i : any) => {
    //     <Square value={squares[i]} onClick={()=> handleClick(i)}/>
    // }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner : " + winner;
    }else{
        status = ' Next Player : ' + (isNext?"X":"O")
    }

    // ===================================================================

  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
            
        <Square value={squares[0]} onClick={()=> handleClick(0)}/>
        <Square value={squares[1]} onClick={()=> handleClick(1)}/>
        <Square value={squares[2]} onClick={()=> handleClick(2)}/>
            {/* {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)} */}

        </div>
        <div className="board-row">
            
        <Square value={squares[3]} onClick={()=> handleClick(3)}/>
        <Square value={squares[4]} onClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onClick={()=> handleClick(5)}/>
            {/* {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)} */}

        </div>
        <div className="board-row">

        <Square value={squares[6]} onClick={()=> handleClick(6)}/>
        <Square value={squares[7]} onClick={()=> handleClick(7)}/>
        <Square value={squares[8]} onClick={()=> handleClick(8)}/>
            {/* {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}  */}

        </div>    
    </div>
  )

 //================== Function to calculate the winner ============================
 
 function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  } 


}

export default Board