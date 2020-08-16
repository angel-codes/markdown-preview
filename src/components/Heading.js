import React from 'react';
import tw from 'twin.macro';

// Styled Components
const Container = tw.header`flex justify-center w-full items-center`;
const Title = tw.h1`text-4xl text-center bg-white rounded px-4 py-2 font-bold text-gray-900`;

const Heading = () => {
    return (
        <Container>
            <Title>Markdown Preview</Title>
        </Container>
    );
}

export default Heading;