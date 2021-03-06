import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import server from '../config/index'



// you can't impornt main css in component, you must create a css component and with .module.css
export default function Home({articles}) {
  return (
    <div>

        <ArticleList articles={articles} />
    </div>
  )
}
export const getStaticProps = async() => {
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}

// export const getStaticProps = async() => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     }
//   }
// }
