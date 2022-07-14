import React from 'react';

export default function TicTacToe() {
  const Square = () => <td>-</td>;

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
