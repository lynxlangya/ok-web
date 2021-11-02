import { Carousel } from 'antd';
import Image from 'next/image';
import SwiperStyle from '@/styles/layout/swiper.module.less';
import React from 'react';
import { CarouselRef } from 'antd/lib/carousel';
import { swiperList } from '@/store/swiper'
import { useSelector } from 'react-redux'

const SwiperCard = () => {
  // const list = useSelector(swiperList) || [];
  const list = [
    {
      id: 1,
      image: 'http://cdn.wangdaoo.com/u60_state0.jpg',
      title: '创造无止境，成就美一天',
      subTitle: '引领新潮，拓展视界；扬我威业，人生无悔',
      text: '引领一流的队伍，创造一流的业绩，展现一流的风彩',
    },
    {
      id: 2,
      image: 'http://cdn.wangdaoo.com/u60_state2.jpg',
      title: '集一流人才，创一流品牌',
      subTitle: '追求精品，成就优品；力合众心，创造奇迹',
      text: '用一流的人才，创一流的品质，供一流的服务，收一流的效益',
    },
    {
      id: 3,
      image: 'http://cdn.wangdaoo.com/u60_state0.jpg',
      title: '谋发展之道，走共赢之路',
      subTitle: '拓宽视野，创新科技；志诚高远，活力无限',
      text: '勤思巧干苦攀，风逆我自昂扬；创新创收创业，我誓更创辉煌',
    },
    {
      id: 4,
      image: 'http://cdn.wangdaoo.com/u60_state3.jpg',
      title: '齐心创优质，共同享价值',
      subTitle: '发挥潜能，智取力行；宏远博大，恒久创新',
      text: '诚信高效服务用户团结进取争创效益',
    },
  ]
  const bgRef = React.createRef<CarouselRef>();
  const textRef = React.createRef<CarouselRef>();
  return (
    <div className={SwiperStyle.card__content}>
      <Carousel ref={bgRef} autoplay dots={false}>
        {list.map((item: any) => {
          return (
            <div key={item.id}>
              <div
                className={SwiperStyle.card__box}
                style={{ backgroundImage: 'url(' + item.image + ')' }}
              >
                <h1 className={SwiperStyle.card__title}>{item.title}</h1>
                <h2 className={SwiperStyle.card__subtitle}>
                  {item?.subTitle ?? ''}
                </h2>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className={SwiperStyle.card__step}>
        <div className={SwiperStyle.card__icon}>
          <Image
            priority
            src="/left.svg"
            onClick={() => {
              bgRef.current && bgRef.current.prev();
              textRef.current && textRef.current.prev();
            }}
            height={20}
            width={20}
            alt="icon"
          />
          <Image
            priority
            src="/right.svg"
            onClick={() => {
              bgRef.current && bgRef.current.next();
              textRef.current && textRef.current.next();
            }}
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <Carousel
          ref={textRef}
          autoplay
          dots={false}
          vertical
          dotPosition="left"
          className={SwiperStyle.item__box}
        >
          {list.map((it: any) => {
            return (
              <div key={it.id} className={SwiperStyle.step_item}>
                {it.text}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SwiperCard;
