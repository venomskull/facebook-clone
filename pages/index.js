import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { db } from '../firebase'


export default function Home({session, posts}) {

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
        <Feed posts={posts} />

        {/* WIDGETS */}
        <Widgets />


      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs
    }
  }

}
