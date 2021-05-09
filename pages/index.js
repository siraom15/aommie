import { Button } from 'antd'
import Head from 'next/head'
import React from 'react'

import { Layout, Breadcrumb,Image } from 'antd';
const { Header, Content, Footer } = Layout;

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Home 🏠 | aommie.codes</title>
      </Head>
      <Layout className="container p-0" theme="light" >
        <Navbar />
        <Content className="p-5">
          <div className="content text-center">
           
            <h1>Hi, I'm áom 🍵</h1>
            {/* <Image
              width={200}
              src="https://github.com/siraom15.png"
            /> */}
            <p>Siriwat Jaiyungyuen :D </p>
            <p>Now, I am studying at SIT26@KMUTT💻</p>
            <p>I want to be a Backend Developer, Software Developer. (to be a rich man 💸 :D)</p>
            <br />
            <p>Green tea lover 🍵, Cat lover 🐈, Sleeping lover 💤, Chocolate lover 🍫</p>
            <p>Working at midnight 🌖 My brain running 300% 🤯</p>
            <br />
            <p>Live in Bangkok, Thailand. 🌎</p>
          </div>
        </Content>
      </Layout>

    </>
  )
}

export default Home;
