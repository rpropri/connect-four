const Message = ( {winner} ) => {
  if (winner !== '') {
    return (
      <h2>Player {winner} has crushed player {winner === 'X' ? 'O':'X'}</h2>
    );
  }
  return <h2></h2>;
}

export default Message;