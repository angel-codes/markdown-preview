import { useState } from 'react';

// components
import Title from './components/Title';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

function App() {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Title text="Markdown Preview" />
      <div className="container mx-auto px-56">
        <main className="grid gap-16 grid-cols-1 mt-10 w-full lg:grid-cols-2">
          <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
          <MarkdownOutput markdown={markdown} />
        </main>
      </div>
    </div>
  );
}

export default App;
