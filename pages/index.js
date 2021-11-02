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
            <br />
            <p>Green tea lover 🍵, Cat lover 🐈, Sleeping lover 💤, Chocolate lover 🍫</p>
            <p>Working at midnight 🌖 My brain running 300% 🤯</p>
            <br />
            <p>Live in Bangkok, Thailand. 🌎</p>
          </div>
        </Content>
        <Footer>
          <p className="text-center">© aommie {new Date().getFullYear()}</p>
        </Footer>
      </Layout>
    </>
  )
}

export default Home;
