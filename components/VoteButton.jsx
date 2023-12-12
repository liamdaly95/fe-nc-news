const VoteButton = ({direction}) => {
  if (direction === 'up') {
    return <button>⬆</button>;
  }
  return <button>⬇</button>;
};

export default VoteButton;
