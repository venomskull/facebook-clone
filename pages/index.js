import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'


export default function Home({session}) {

  if (!session) return <Login />

  return (
    <div className='bg-gray-100 overflow-hidden h-screen'>
      <Head>
        <title>Facebook</title>
      </Head>
      
      {/* HEADER */}
      <Header />

      <main className='flex'>
        {/* SIDEBAR */}
        <Sidebar />

        {/* FEED */}
        <Feed />

        {/* WIDGETS */}



      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }

}
