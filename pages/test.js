import React from 'react';
import Head from 'next/head'
export default function test() {
    return (
        <>
            <Head>
                <link rel="stylesheet" src="/css/rain.css"></link>
            </Head>
            <div id="all">
                <div id="container">
                    <div id="animate">
                    </div>
                </div>
            </div>
            <script src="/js/rain.js"></script>

        </>
    )
}