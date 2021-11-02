// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  list: object;
};

const list = {
  status: 1000,
  msg: 'success',
  list: [
    { id: 1, title: '首页', path: '/home', sort: 1 },
    { id: 3, title: '商城', path: '/shop', sort: 2 },
    { id: 2, title: '关于我们', path: '/about', sort: 10 },
    { id: 9, title: '行业动态', path: '/news', sort: 8 },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(list);
}
