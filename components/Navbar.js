import React from 'react'
import { Layout, Menu } from 'antd';
import Link from 'next/link'

import { GithubOutlined, MediumOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ selected = '1' }) => {
    return (
        <>
            <Header theme="light" className="d-flex justify-content-center">
                {/* <div className="logo" /> */}
                <Menu mode="horizontal" defaultSelectedKeys={[selected]} theme="light">
                    <Menu.Item key="0">
                        <Link href="/">
                            <a> 👾 aommie.codes</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link href="/">
                            <a> Home 🏠</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link href="/about">
                            <a> About 📚</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/showcase">
                            <a>  Showcases 🌠</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="/contact">
                            <a> Contact 📝</a>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="4" >
                        <Link href="https://siriwataom.medium.com/">
                            <a target="_blank">
                                <MediumOutlined />
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" >
                        <Link href="https://www.github.com/siraom15" >
                            <a target="_blank"> <GithubOutlined /></a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}

export default Navbar;