import { Input, Space } from 'antd';

const MasterTitle = (props: any) => {
  const { Search } = Input;
  const { title, subTitle, isSearch } = props;
  const onSearch = (value: any) => {
    props.onSearch(value)
  };
  return (
    <div className="master_title_box">
      <div>
        <div className="master_title">{title}</div>
        <div className="sub_title">{subTitle}</div>
      </div>
      { isSearch ? <Search
        placeholder="搜索"
        style={{ width: 200 }}
        maxLength={30}
        onSearch={onSearch}
        allowClear
      /> : null }
      <style jsx>{`
        .master_title_box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(75rem - 20px);
          min-width: calc(75rem - 20px);
          background-color: #fff;
          padding: 1.5rem 2rem;
          margin: -3rem 0 2rem 0;
          box-shadow: 0px 0px 10px rgb(153 153 153 / 20%);
        }
        .master_title {
          font-size: 1.2rem;
          color: #4380c3;
        }
        .sub_title {
          color: #4380c3;
        }
      `}
      </style>
    </div>
  );
};

export default MasterTitle;
