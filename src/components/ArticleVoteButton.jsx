import { updateArticleVote, updateCommentVote } from "../../utils/api";
import { voteButton } from "../../css/Buttons.module.css";

const ArticleVoteButton = ({ inc_votes, setIsHidden, hasVoted, setHasVoted, id, setState, type }) => {
  const patch = { article: updateArticleVote, comment: updateCommentVote };
  const handleClick = (inc_votes) => {
    patch[type](id, inc_votes).catch(() => {
      setState((currState) => {
        return { ...currState, votes: currState.votes - inc_votes };
      });
      setHasVoted(false);
      setIsHidden(false);
      setTimeout(() => {
        setIsHidden(true);
      }, 3000);
    });
    setHasVoted(true);
    setState((currState) => {
      return { ...currState, votes: currState.votes + inc_votes };
    });
  };

  return (
    <button
      className={voteButton}
      disabled={hasVoted}
      onClick={() => {
        handleClick(inc_votes);
      }}
    >
      {inc_votes === 1 ? "⬆" : "⬇"}
    </button>
  );
};

export default ArticleVoteButton;
