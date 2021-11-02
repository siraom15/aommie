import Head from 'next/head'
import React from 'react'
import { Result, Button } from 'antd';
import Link from 'next/link';
const Notfound = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>404 ⛔ | aommie.codes</title>
            </Head>

            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" >
                    <Link href="/">
                        <a>Back Home</a>
                    </Link>
                </Button>}
            />
        </>
    )
}

export default Notfound;