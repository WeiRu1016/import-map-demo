import { Suspense, lazy, useMemo, useState } from 'react'
import todoList from '@baomax/web-components/todo-list';
import { WebComponentContainer } from './WebComponentContainer';
import { Button, Card, Spin } from 'antd';

const StatisticList = lazy(() => import('@baomax/web-components/statistic-list').then((module) => {
    return {
        default: () => {
            return <WebComponentContainer name={module.default} /> 
        }
    }
}));

const createItem = (i: number) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
});

const dataSource = Array.from({ length: 1 }).map((_, i) => createItem(i));

function App() {
  const [count, setCount] = useState(0);
  const [_dataSource, _setDataSource] = useState(dataSource);

  const props = useMemo(() => {
    return { 'data-source': JSON.stringify(_dataSource) }
  }, [_dataSource]);

  return (
    <>
      <Card title="count 大于 2 展示 数据卡片" extra={<Button onClick={() => setCount(count + 1)}>click {count}</Button>}>
        {count > 2 && <Suspense fallback={<Spin spinning />}><StatisticList /></Suspense>}
      </Card>
      <Card title="import webcomponent" extra={<Button onClick={() => {
            const item = createItem(_dataSource.length)
            _setDataSource([..._dataSource, item])
        }}>Add Item</Button>}>
        <WebComponentContainer name={todoList} props={props} />
      </Card>
    </>
  )
}

export default App
