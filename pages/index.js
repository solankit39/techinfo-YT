import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <h1 className='text-success'>My App</h1>
    </Layout>
  )
}
