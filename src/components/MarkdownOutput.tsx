export type MarkdownOutputProps = {};

const MarkdownOutput = ({}: MarkdownOutputProps) => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-gray-50 font-sans text-5xl">Output</h2>
      <div className="block p-5 w-full bg-gray-50 rounded" style={{ height: '50vh' }}></div>
    </div>
  );
};

export default MarkdownOutput;
