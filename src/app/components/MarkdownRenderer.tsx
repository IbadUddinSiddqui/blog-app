// components/MarkdownRenderer.js
import React from 'react';

const MarkdownRenderer = ({ content } : any) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content.content }}
        className="markdown-content"
      />
    </div>
  );
};

export default MarkdownRenderer;
