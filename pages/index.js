import Head from 'next/head'
import Image from 'next/image'
import {
  Homee,
  Navbar,
  Stats,
  WhyUs,
  Footer,
  Courses,
  Contact,
  
} from "../components";

export default function Home() {
  return (
    <div className='   overflow-hidden'>
      <Head>
        <title>SkillUp</title>
        <meta name="description" content="Improve and boost your skilsl with SkillUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <Homee />
        <Stats/>
        <WhyUs/>
        <Courses/>
        <Contact/>
        <Footer/>
    </div>
  )
}
