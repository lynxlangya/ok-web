// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  list: object;
};

const list = {
  status: 1000,
  msg: 'success',
  list: [
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
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(list);
}
