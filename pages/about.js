import { Button, Col, Divider, Row } from 'antd'
import Head from 'next/head'
import React from 'react'
import { Layout, Breadcrumb, Image } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>About Me👇 | aommie.codes</title>
            </Head>
            <Layout className="container p-0" theme="light" >
                <Navbar selected="6" />
                <Content className="p-5">
                    <div className="content text-center">

                        <h1>About Me 👾 </h1>
                        <Image className="rounded-circle"
                            width={200}
                            src="https://github.com/siraom15.png"
                        />
                        <p>My name is Siriwat Jaiyungyuen :D </p>
                        <p>Now, I am studying at SIT26@KMUTT💻</p>
                        <p>Working as Freelancer (Website, Programming) </p>
                        <br />
                        <Divider>Programming Skill</Divider>
                        <div>
                            {/* <p>Java C Javascript PHP</p> */}
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" height="50" />
                            <img className="rounded-circle m-1" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png" height="50" />
                        </div>
                        <Divider>Database</Divider>
                        <div>
                            <p>Oracle SQL, MySql, Mongo DB</p>
                        </div>
                        <Divider>Other</Divider>
                        <div>
                            <p>Linux command also server, Docker, Heroku, vercel</p>
                        </div>
                        <Divider>Internship</Divider>
                        <div>
                            <p>No record</p>
                        </div>
                        <br />
                    </div>
                </Content>
                <Footer>
                    <p className="text-center">© aommie {new Date().getFullYear()}</p>
                </Footer>
            </Layout>

        </>
    )
}

export default About;
