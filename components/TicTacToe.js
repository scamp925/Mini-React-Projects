import React from 'react';

export default function TicTacToe() {
  const Cell = () => <td>-</td>;

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
