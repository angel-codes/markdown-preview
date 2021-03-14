export type MarkdownInputProps = {};

const MarkdownInput = ({}: MarkdownInputProps) => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-gray-50 font-sans text-5xl">Input</h2>
      <textarea
        name="input"
        className="block p-5 w-full bg-gray-50 rounded"
        style={{ height: '50vh' }}
      ></textarea>
    </div>
  );
};

export default MarkdownInput;
