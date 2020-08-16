import React, { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

// Styled Components
const SubHeading = tw.h2`text-center text-white text-2xl font-bold mb-5`;
const MarkdownOutput = styled.div(() => [
    tw`bg-white w-full p-5 block rounded shadow-md prose md:prose-lg`,
    `height: 55vh`
]);

const MarkdownPreview = () => {
    return (
        <Fragment>
            <SubHeading>Output</SubHeading>
            <MarkdownOutput></MarkdownOutput>
        </Fragment>
    );
}

export default MarkdownPreview;