import React, { useState } from 'react';
import PropTypes from 'prop-types'; // DONT FORGET to import this!
import Button from 'react-bootstrap/Button';

export default function TicTacToe() {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();

  const checkForWinner = (boxes) => {
    const combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    // for...in loop interates over an object (combos in this case), then I am looping over the arrays in the obj
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const combo in combos) {
      combos[combo].forEach((pattern) => {
        if (boxes[pattern[0]] === '' || boxes[pattern[1]] === '' || boxes[pattern[2]] === '') {
          // do nothing
        } else if (boxes[pattern[0]] === boxes[pattern[1]] && boxes[pattern[1]] === boxes[pattern[2]]) {
          setWinner(boxes[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    const boxes = [...squares];
    // Using the spread operator b/c I need boxes to include all the elements from squares

    if (squares[num] !== '') {
      alert('Square Already Taken. Please Choose Another.');
      return;
    }

    if (turn === 'X') {
      boxes[num] = 'X';
      setTurn('O');
    } else {
      boxes[num] = 'O';
      setTurn('X');
    }

    checkForWinner(boxes);
    setSquares(boxes);
  };

  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
  const Square = ({ num }) => <td onClick={() => handleClick(num)}>{squares[num]}</td>;

  Square.propTypes = {
    num: PropTypes.number.isRequired,
  };

  const handleRestart = () => {
    setWinner(null);
    setSquares(Array(9).fill(''));
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Tic Tac Toe</h1>
      <h6>Whose Turn: {turn}</h6>
      <table>
        <tbody>
          <tr>
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
          </tr>
          <tr>
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
          </tr>
          <tr>
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <h3>{winner} is the winner! Congratulations!!</h3>
        </>
      )}
      <Button variant="success" className="tic-tac-toe-btn" onClick={() => handleRestart()}>{winner ? 'Play Again' : 'Restart Game'}</Button>{' '}
    </div>
  );
}
