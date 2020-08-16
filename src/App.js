import React, { useState } from 'react';
/** @jsx jsx **/
import { jsx } from '@emotion/core';
import 'twin.macro';

// Components
import Heading from './components/Heading';
import MarkdownBox from './components/MarkdownBox';
import MarkdownPreview from './components/MarkdownPreview';

function App() {

  const [markdown, setMarkdown] = useState("");

  return (
    <div tw="bg-gray-900 min-h-screen">
      <main tw="container mx-auto py-16">
        <Heading/>
        <div tw="grid grid-cols-2 gap-10 my-20">
          <div tw="col-span-2 md:col-span-1">
            <MarkdownBox 
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
          </div>
          <div tw="col-span-2 md:col-span-1">
            <MarkdownPreview
              markdown={markdown}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;