/** @jsx jsx **/
import { jsx } from '@emotion/core';
import 'twin.macro';

// Components
import Heading from './components/Heading';

function App() {
  return (
    <div tw="bg-gray-800 min-h-screen">
      <main tw="container mx-auto py-16">
        <Heading/>
      </main>
    </div>
  );
}

export default App;