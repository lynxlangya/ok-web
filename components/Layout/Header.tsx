import Image from 'next/image';
import Router from 'next/router';
import headerStyles from '@/styles/layout/header.module.less';
import { sortBy } from '@/utils/func';
import { menuList } from '@/store/menu'
import { useSelector } from 'react-redux'

const Header = () => {
  // const menu = useSelector(menuList);
  const menu = [
    { id: 1, title: '首页', path: '/home', sort: 1 },
    { id: 3, title: '商城', path: '/shop', sort: 2 },
    { id: 2, title: '关于我们', path: '/about', sort: 10 },
    { id: 9, title: '行业动态', path: '/news', sort: 8 },
  ]
  const sortList = menu ? sortBy(menu, 'sort') : []
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
        {sortList.map((item: any) => {
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
