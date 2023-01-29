import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Comment from '../../../components/Comment';
export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />

      <Comment />
    </>
  );
}
