import React, { Fragment } from 'react';
import tw, { styled } from 'twin.macro';
import ReactMarkdown from 'react-markdown';

// Styled Components
const SubHeading = tw.h2`text-center text-white text-2xl font-bold mb-5`;
const MarkdownOutput = styled.div(() => [
    tw`bg-white w-full p-5 block rounded shadow-md prose overflow-auto`,
    `height: 55vh;`,
    `max-height: 55vh`
]);

const MarkdownPreview = ({ markdown }) => {
    return (
        <Fragment>
            <SubHeading>Output</SubHeading>
            <MarkdownOutput>
                <ReactMarkdown
                    source={markdown}
                />
            </MarkdownOutput>
        </Fragment>
    );
}

export default MarkdownPreview;