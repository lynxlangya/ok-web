import { Row, Col, Card } from 'antd';
import Image from 'next/image';
import styles from '@/styles/home/product.module.less';

const Product = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { Meta } = Card;
  return (
    <Row gutter={[20, 24]} className={styles.produces}>
      {list.map((it, index) => {
        return (
          <Col key={index} span={8} className={styles.card__box}>
            <Card
              hoverable
              cover={
                <Image
                  src="http://dummyimage.com/400x220"
                  width={400}
                  height={220}
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
                    Explicabo natus dolor tempora aperiam facere. Sit voluptatum error. Inventore incidunt minima molestiae sit sed corrupti. Qui ad omnis omnis aliquid sequi ut ipsum amet.
                  </div>
                }
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
