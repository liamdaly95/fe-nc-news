import { updateArticleVote } from "../../utils/api"

const ArticleVoteButton = ({inc_votes, article, setArticle}) => {
    const handleClick = (inc_votes) => {
        updateArticleVote(article.article_id,inc_votes).catch(() => {
          setArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes - inc_votes}
          })
          setIsHidden(false)
          setTimeout(() => {
          setIsHidden(true)
          }, 3000)
        })
        setArticle((currArticle) => {
          return {...currArticle, votes: currArticle.votes + inc_votes}
        })
        
      }

      return (
        <button onClick={() => {
            handleClick(inc_votes)
          }}>{inc_votes === 1 ? "⬆" : "⬇"}</button>
      )
      

}

export default ArticleVoteButton