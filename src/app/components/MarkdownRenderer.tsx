// components/MarkdownRenderer.js
import React from 'react';

interface ContentProps {
  title: string;
  content: string; 
}

const MarkdownRenderer: React.FC<{ content: ContentProps }> = ({ content }) => {
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
