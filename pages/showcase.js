import Head from 'next/head'
import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Content, Footer } = Layout;
import { Space } from 'antd'
import Navbar from '../components/Navbar'
import ShowcaseCard from '../components/ShowcaseCard';
import * as data from '../data/showcases.json';

const Showcase = ({ showcaseData }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Showcase 🌠 | aommie.codes</title>
            </Head>

            <Layout className="container p-0" theme="light" >
                <Navbar selected="2" />
                <Content className="p-5">
                    <div className="content text-center">

                        <h1>Showcases 🌠</h1>
                        <p>I build some websites to improve myskill 💪💪</p>
                        <div className="site-card-wrapper">
                            <Row >
                                {showcaseData.map(e => (
                                    <Col span={8} xs={24} xl={6} md={12} lg={6} >
                                        <ShowcaseCard data={e} />
                                    </Col>
                                ))
                                }
                            </Row>
                        </div>
                    </div>
                </Content>
                <Footer>
                    <p className="text-center">© aommie {new Date().getFullYear()}</p>
                </Footer>
            </Layout>
        </>
    )
}
export async function getStaticProps() {
    // console.log(data.default);
    // const res = await fetch("http://localhost:3000/api/showcases");
    // const data = await res.json();
    return {
        props: {
            showcaseData: data.default || {}
        }
    };
}
export default Showcase;