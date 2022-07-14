import React, { useState } from 'react';
import PropTypes from 'prop-types'; // DONT FORGET to import this!

export default function TicTacToe() {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (num) => {
    const boxes = [...squares];

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

    setSquares(boxes);
  };

  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
  const Square = ({ num }) => <td onClick={() => handleClick(num)}>{squares[num]}</td>;

  Square.propTypes = {
    num: PropTypes.number.isRequired,
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table>
        Whose Turn: {turn}
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
    </div>
  );
}
