import React from 'react';

export type MarkdownInputProps = {
  markdown: string;
  setMarkdown: Function;
};

const MarkdownInput = ({ markdown, setMarkdown }: MarkdownInputProps) => {
  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.currentTarget.value);
  };

  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-gray-50 font-sans text-5xl">Input</h2>
      <textarea
        name="input"
        value={markdown}
        onChange={handleChange}
        className="block p-5 w-full bg-gray-50 rounded"
        style={{ height: '50vh' }}
      ></textarea>
    </div>
  );
};

export default MarkdownInput;
