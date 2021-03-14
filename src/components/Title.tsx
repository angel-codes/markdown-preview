export type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <h1 className="text-gray-50 font-sans text-6xl font-bold leading-tight">{text}</h1>;
};

export default Title;
