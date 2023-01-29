import React, { forwardRef, useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus, { GiscusProps } from '@giscus/react';

export const Comment = forwardRef<HTMLDivElement>((_props, ref) => {
  const [routeDidUpdate, setRouteDidUpdate] = useState(false);

  useEffect(() => {
    function eventHandler(e) {
      setRouteDidUpdate(true);
    }

    window.emitter.on('onRouteDidUpdate', eventHandler);

    return () => {
      window.emitter.off('onRouteDidUpdate', eventHandler);
    };
  }, []);

  if (!routeDidUpdate) {
    return null;
  }

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => (
        <div ref={ref} id="comment" style={{ paddingTop: 50 }}>
        <Giscus
          id="comments"
          repo="heshibin/heshibin.github.io"
          repoId="R_kgDOItFCwg="
          category="Announcements"
          categoryId="DIC_kwDOItFCws4CT3dY"
          mapping="title"
          strict="0"
          // term="Welcome to heshibin.github.io Discussions!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="zh-CN"
          loading="lazy"
        />
        </div>
      )}
    </BrowserOnly>
  );
});

export default Comment;

