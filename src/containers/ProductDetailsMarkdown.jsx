import React, { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const normalizeMarkdown = (text) => {
  const lines = text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n');

  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      const leading = match ? match[1].length : 0;
      return min === null ? leading : Math.min(min, leading);
    }, null);

  return lines
    .map((line) => (minIndent !== null ? line.slice(minIndent) : line))
    .join('\n')
    .trim();
};

const ProductDetailsMarkdown = ({ text, language }) => {
  const [copied, setCopied] = useState(false);
  const normalizedText = useMemo(() => normalizeMarkdown(text), [text]);

  const handleCopyCode = async (code) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  const copiedLabel = language === 'es' ? 'Copiado' : 'Copied';

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ node, ...props }) => <p className="product-detail__description-text" {...props} />,
        ul: ({ node, ...props }) => <ul className="product-detail__description-list" {...props} />,
        ol: ({ node, ...props }) => (
          <ol className="product-detail__description-list product-detail__description-list--ordered" {...props} />
        ),
        li: ({ node, ...props }) => <li className="product-detail__description-list-item" {...props} />,
        a: ({ node, ...props }) => (
          <a className="product-detail__description-link" target="_blank" rel="noreferrer noopener" {...props} />
        ),
        code: ({ inline, className, children, ...props }) => {
          const codeText = String(children).replace(/\n$/, '');

          if (inline) {
            return <code className="product-detail__code-inline" {...props}>{children}</code>;
          }

          return (
            <div className="product-detail__code-wrapper">
              <div className="product-detail__copy-action">
                <button
                  type="button"
                  className="product-detail__code-copy"
                  onClick={() => handleCopyCode(codeText)}
                  title={language === 'es' ? 'Copiar código' : 'Copy code'}
                >
                  {copied ? '✔' : '📋'}
                </button>
                {copied && <span className="product-detail__copy-notice">{copiedLabel}</span>}
              </div>
              <pre className="product-detail__code-block"><code className={className} {...props}>{children}</code></pre>
            </div>
          );
        },
        strong: ({ node, ...props }) => <strong {...props} />,
        em: ({ node, ...props }) => <em {...props} />
      }}
    >
      {normalizedText}
    </ReactMarkdown>
  );
};

export default React.memo(ProductDetailsMarkdown);
