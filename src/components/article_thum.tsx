import React from 'react';
import { Divider, Typography } from 'antd';
import router from 'umi/router';
import articleAPI from '@/api/article';

import ss from '@/styles/article_thum.less';

const { Title } = Typography;
const article = node => {
  console.log(node)
  // router.push(`/article?id=${node.target.id}&type=${node.target._type}`);
}

const ArticleThum = props => (
  <div>
    <Title level={3} onClick={() => article(props)} className={ss.title}>{props.title}</Title>
    <div>id: {props.id}</div>
    <Divider />
  </div>
);

export default ArticleThum;
