import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <p>Loading... </p>
      <MagnifyingGlass
        visible={true}
        height="64"
        width="64"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          margin: '0 auto',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#e4f8f1d3"
        color="#113835"
      />
    </Wrapper>
  );
};
