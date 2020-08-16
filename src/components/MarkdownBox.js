import React, { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

// Styled Components
const SubHeading = tw.h2`text-center text-white text-2xl font-bold mb-5`;
const MarkdownInput = styled.textarea(() => [
    tw`bg-white w-full p-5 block rounded shadow-md`,
    `height: 55vh`
]);

const MarkdownBox = ({ markdown, setMarkdown }) => {
    
    // Get the Markdown
    const handleChange = e => {
        setMarkdown(e.target.value);
    }

    return (
        <Fragment>
            <SubHeading>Input</SubHeading>
            <MarkdownInput
                onChange={handleChange}
                value={markdown}
            />
        </Fragment>
    );
}

export default MarkdownBox;