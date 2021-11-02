import Head from 'next/head'
import React from 'react'
import { Result, Button } from 'antd';
import Link from 'next/link';

const Notfound = () => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>500 ⛔ | aommie.codes</title>
            </Head>

            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
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