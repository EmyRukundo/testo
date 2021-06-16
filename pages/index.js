import Head from 'next/head'



// you can't impornt main css in component, you must create a css component and with .module.css
export default function Home() {
  return (
    <div>
        <head>
          <title>EmyTheProgrammer</title>
          <meta name='keywords' content='web development, programming'/>
        </head>
        <h1>web development</h1>
    </div>
  )
}
