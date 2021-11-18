import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { Input, Tag, Table } from 'antd';
import styles from './SearchNpm.module.scss';
import { npmModel } from './models/npmModel';
import { useLoading, useModel } from 'foca';
import { historyModel } from './models/historyModel';

const SearchNpm: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const npm = useModel(npmModel, (state) => state[searchValue]);
  const tags = useModel(historyModel);
  const loading = useLoading(npmModel.search);

  const handleSearch = useCallback((value) => {
    setSearchValue(value);
    setCurrentValue(value);
    value && npmModel.search(value);
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Input.Search
        value={currentValue}
        onChange={handleChange}
        loading={loading}
        className={styles.input}
        size="large"
        placeholder="输入包名，如：react"
        autoFocus
        onSearch={handleSearch}
        allowClear
      />
      <div>
        搜索历史：
        {tags.map((item) => (
          <Tag
            className={styles.tag}
            key={item}
            onClick={() => handleSearch(item)}
          >
            {item}
          </Tag>
        ))}
      </div>
      {loading && <p className={styles.loading}>Loading...</p>}
      {npm && (
        <div className={styles.body}>
          <header>
            <a href={npm.homepage} target="_blank">
              {npm.name}
            </a>
            &nbsp;
            <Tag color="orange">{npm.license}</Tag>
          </header>
          <Table
            columns={[
              {
                title: '版本',
                dataIndex: 'version',
              },
              {
                title: '标签',
                dataIndex: 'tag',
              },
            ]}
            dataSource={Object.entries(npm['dist-tags']).map(
              ([tag, version]) => ({
                tag,
                version,
              }),
            )}
            pagination={false}
            loading={loading}
            rowKey="tag"
          />
        </div>
      )}
    </div>
  );
};

export default memo(SearchNpm);
