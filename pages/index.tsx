import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>oi from newClient</h1>
      <Link href="/newclient/step1">
        <a>novo cliente</a>
      </Link>
    </>
  )
}

export default Home
