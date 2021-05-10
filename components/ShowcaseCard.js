import React from 'react'
import { Card, Carousel, Image, Empty } from 'antd'
const { Meta } = Card;
import { LinkOutlined, CopyOutlined,CloseOutlined } from '@ant-design/icons';
import Link from 'next/link'

const ShowcaseCard = ({ data }) => {
    const img = []
    if (data.numofimg > 0) {
        for (let index = 1; index <= data.numofimg; index++) {
            img.push(<Image
                // width={300}
                src={`/img/${data.name}/${index}.jpeg`}
                className="responsive-img"
            />)
        }
    }
    return (
        <Card
            hoverable
            style={{ margin: '2em' }}
            cover={<Carousel autoplay>
                {
                    data.numofimg > 0 ?
                        img.map(e => (
                            <div>
                                {e}
                            </div>
                        ))
                        :
                        <Empty />}
            </Carousel>}
            actions={[
                data.url ?
                    (<Link href={data.url ? data.url : "#"}>
                        <a>
                            <LinkOutlined key="link" />
                        </a>
                    </Link>)
                    : <CloseOutlined />
                ,
                data.sourcecode ?
                    (<Link href={data.sourcecode ? data.sourcecode : "#"} >
                        <a>
                            <CopyOutlined key="code" />
                        </a>
                    </Link >)
                    : <CloseOutlined />
            ]}
        >
            <Meta title={data.name} description={data.describe} />
        </Card >
    )
}

export default ShowcaseCard;