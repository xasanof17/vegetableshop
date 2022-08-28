
import React from 'react'
import Head from 'next/head'
import { HeaderSlider } from '../components'

export default function Home() {
  return (
    <section id="home">
      <Head><title>Рядом</title></Head>
      <HeaderSlider />
    </section>
  )
}
