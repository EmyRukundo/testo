import Head from 'next/head';
import ArticleList from "../components/ArticleList";




// you can't impornt main css in component, you must create a css component and with .module.css
export default function Home({articles}) {
  return (
    <div>
        <Head>
          <title>EmyTheProgrammer</title>
          <meta name='keywords' content='web development, programming'/>
        </Head>
        <ArticleList article={articles} />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

