import server from '../../../config/index'
import Link from 'next/link'
import {useRouter } from 'next/router'
import Meta from '../../../components/Meta';


// you can't impornt main css in component, you must create a css component and with .module.css
const article =({article}) => {
 
  // displaying one particular page
  // const router = useRouter()
  // const { id} = router.query


  return (
    <div>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
    <Link href='/'>Go Back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
         
    const res = await fetch(
        `http://localhost:3000/api/articles/${context.params.id}`
    )

    const article = await res.json()
  return{
   props: {
       article,
   },
 }
}

  export const getStaticPaths = async () => {
    const res = await fetch(
        `http://localhost:3000/api/articles`
        )
  
  const articles = await res.json();

  const ids = articles.map((article) => article.id)

  const paths = ids.map((id) => ({params: {
    id: id.toString() }}))
  return{
   paths,
   fallback: false,
 }
}



///consuming API from thrid party
// export const getStaticProps = async (context) => {
         
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     )

//     const article = await res.json()
//   return{
//    props: {
//        article,
//    },
//  }
// }

//   export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id)

//   const paths = ids.map((id) => ({params: {
//     id: id.toString() }}))
//   return{
//    paths,
//    fallback: false,
//  }
// }
export default article;