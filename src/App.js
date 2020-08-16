/** @jsx jsx **/
import { jsx } from '@emotion/core';
import 'twin.macro';

// Components
import Heading from './components/Heading';
import MarkdownBox from './components/MarkdownBox';

function App() {
  return (
    <div tw="bg-gray-900 min-h-screen">
      <main tw="container mx-auto py-16">
        <Heading/>
        <div tw="grid grid-cols-2 gap-4 my-20">
          <div tw="col-span-2 md:col-span-1">
            <MarkdownBox/>
          </div>
          <div tw="col-span-2 md:col-span-1">

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;