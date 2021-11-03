import { Row, Col, Card, Badge, Statistic } from 'antd';
import { TransactionOutlined } from '@ant-design/icons'
import Image from 'next/image';
import { imageLoader } from '@/utils/func';
import styles from '@/styles/home/product.module.less';

const Spikes = () => {
  const { Meta } = Card;
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  const list = [1, 2, 3, 4];
  const imgUrl = 'http://cdn.wangdaoo.com/300x300.png';
  return (
    <Row gutter={[20, 24]} className={styles.produces}>
      {list.map((it, index) => {
        return (
          <Col key={index} span={6} className={styles.card__box}>
            <Badge.Ribbon text={
              <Countdown
                value={deadline}
                prefix={<TransactionOutlined />}
                valueStyle={{ color: '#fbfbfd', fontSize: '1rem' }}
                format="HH:mm:ss"
              />
            } color="volcano">
              <Card
                hoverable
                cover={
                  <Image
                    loader={imageLoader}
                    src={imgUrl}
                    width={300}
                    height={300}
                    alt="qrCode"
                  />
                }
              >
                <Meta
                  className={styles.card_meta}
                  title={
                    <div className={styles.card_title}>
                      桜色舞うころ，私はひとり
                    </div>
                  }
                  description={
                    <div className={styles.card_sub_title}>
                      人生はいつもいつも第一志望ばかりを歩けるものではありません。そして、必ずしも、第一志望の道を歩くことだけが、自分にとって最良と言えないことだってあるのです。
                    </div>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        );
      })}
    </Row>
  )
}

export default Spikes