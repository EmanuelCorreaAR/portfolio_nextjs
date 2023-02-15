import About from '@/components/About'
import Certificates from '@/components/Certificates'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Emanuel Correa | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Certificates/>
    </div>
  )
}
