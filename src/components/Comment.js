import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        repo="heshibin/heshibin.github.io"
        repoId="R_kgDOItFCwg="
        category="Announcements"
        categoryId="DIC_kwDOItFCws4CT3dY"
        mapping="specific"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;