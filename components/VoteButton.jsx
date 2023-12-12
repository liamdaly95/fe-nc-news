import { updateArticleVote } from "../utils/api";

const VoteButton = ({direction}) => {
  const handleClick = (inc_votes) => {
    updateArticleVote(inc_votes)
  }
  if (direction === 'up') {
    return <button onClick={() => {
      handleClick(1)
    }}>⬆</button>;
  }
  return <button onClick={() => {
    handleClick(-1)
  }}>⬇</button>;
};

export default VoteButton;
