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
        <title>Home ๐  | aommie.codes</title>
      </Head>
      <Layout className="container p-0" theme="light" >
        <Navbar />
        <Content className="p-5">
          <div className="content text-center">
           
            <h1>Hi, I'm รกom ๐ต</h1>
            <br />
            <p>Green tea lover ๐ต, Cat lover ๐, Sleeping lover ๐ค, Chocolate lover ๐ซ</p>
            <p>Working at midnight ๐ My brain running 300% ๐คฏ</p>
            <br />
            <p>Live in Bangkok, Thailand. ๐</p>
          </div>
        </Content>
        <Footer>
          <p className="text-center">ยฉ aommie {new Date().getFullYear()}</p>
        </Footer>
      </Layout>
    </>
  )
}

export default Home;
