import PropTypes from 'prop-types';
import { Blocks } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      <Blocks
        visible={isLoading}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoaderContainer>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
