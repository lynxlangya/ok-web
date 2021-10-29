import Image from 'next/image';
import Router from 'next/router';
import headerStyles from '@/styles/layout/header.module.scss';
import { sortBy } from '@/utils/func';

const Header = () => {
  const menuList = [
    { id: 1, title: '首页', path: '/home', sort: 1 },
    { id: 2, title: '关于我们', path: '/about', sort: 10 },
    { id: 3, title: '应用商城', path: '/shop', sort: 2 },
    { id: 4, title: '产品案例', path: '/case', sort: 3 },
    { id: 5, title: '解决方案', path: '/plan', sort: 4 },
    { id: 6, title: '服务商', path: '/servicer', sort: 5 },
    { id: 7, title: '服务领域', path: '/domain', sort: 6 },
    { id: 8, title: '需求', path: '/demand', sort: 7 },
    { id: 9, title: '咨询动态', path: '/consult', sort: 8 },
    { id: 10, title: '生态合作', path: '/cooperation', sort: 9 },
    { id: 11, title: '地图搜索', path: '/map', sort: 11 },
  ];

  const sortList = sortBy(menuList, 'sort');
  return (
    <header className={headerStyles.header}>
      <div
        className={headerStyles.logo}
        onClick={() => { Router.push('/') }}
      >
        <Image priority src="/logo.svg" height={32} width={32} alt="image" />
        <span className={headerStyles.title}>OK-WEB</span>
      </div>
      <div className={headerStyles.menu_box}>
        {sortList.map((item) => {
          return (
            <span key={item.id} onClick={() => { Router.push(item.path) }}>
              {item.title}
            </span>
          );
        })}
      </div>
      <div className={headerStyles.login_box}>登录</div>
    </header>
  );
};

export default Header;
