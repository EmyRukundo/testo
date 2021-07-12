<<<<<<< 19278b8e9f194db0aca1a20032f3bc06aa5a2e9a
import ArticleItem from './ArticleItem';
import articlesStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return (
       <div className={articlesStyles.grid}>
          {articles.map((article) =>{
              <ArticleItem article={article} />
          })}
       </div>
    )
}
export default ArticleList;
=======
import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
>>>>>>> Custom Meta Component
