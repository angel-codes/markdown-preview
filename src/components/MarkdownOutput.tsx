import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

export type HighlighterProps = {
  language: string;
  value: React.ReactNode;
};

const renderers = {
  code: ({ language, value }: HighlighterProps) => (
    <SyntaxHighlighter style={dracula} language={language} children={value} />
  )
};

export type MarkdownOutputProps = {
  markdown: string;
};

const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-gray-50 font-sans text-5xl">Output</h2>
      <div className="prose block p-5 w-full bg-gray-50 rounded" style={{ height: '50vh' }}>
        <ReactMarkdown renderers={renderers} children={markdown} />
      </div>
    </div>
  );
};

export default MarkdownOutput;
