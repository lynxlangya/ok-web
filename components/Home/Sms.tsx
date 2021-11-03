import { List, Avatar, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link'
import { imageLoader } from '@/utils/func';
import React from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import styles from '@/styles/home/sms.module.less'

const Sms = () => {
  const listData = [];
  for (let i = 0; i < 3; i++) {
    listData.push({
      href: '/news',
      title: `桜色舞うころ，私はひとり ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        '夏の花の如（ごと）く艶（つや）やかに生き、秋の枯叶（かれは）の如く穏（おだ）やかに终りを迎えよ。',
      content:
        '上手くはいかぬこともあるけれど、天を仰（あお）げば、それさえ小さくて、青い空は凛（りん）と澄んで、羊云（ひつじぐも）は静かに揺れる、花咲くを待つ喜びを、分かち合えるのであれば、それは幸せ。',
    });
  }
  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <List
      itemLayout="vertical"
      size="large"
      className={styles.list_box}
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <Image
              width={272}
              height={168}
              loader={imageLoader}
              alt="logo"
              src="http://cdn.wangdaoo.com/272x168.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={
              <Link href={item.href}>
                <a >{item.title}</a>
              </Link>
            }
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Sms;
