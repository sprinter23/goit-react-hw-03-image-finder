import { Component } from 'react';
import { requestGallery } from '../api.js';
import { Layout, ErrorMessage } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';



export class App extends Component {
  state = {
    searchQuery: '',
    page: null,
    error: '',
    images: [],
    isLoading: false,
    isLoadMoreShown: false,
  };

  componentDidMount() {
    if (this.state.isLoading) {
      this.fetchImages();
    }
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.fetchImages();
    }
  }

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  fetchImages = async () => {
    const searchQuery = this.state.searchQuery;
    const searchPage = this.state.page;
    try {
      const fetchedImages = await requestGallery(searchQuery, searchPage);
      const images = [...this.state.images, ...fetchedImages.hits];
      this.setState({
        images: images,
        isLoadMoreShown: images.length < fetchedImages.totalHits,
        error:
          images.length === 0
            ? 'Sorry, there are no images matching your search query.'
            : '',
      });
    } catch {
      this.setState({
        error: 'Ops, failed to load. Please try again.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      images: [],
      page: 1,
      isLoading: true,
    });
  };

  handleClickOnLoadBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { isLoading, images, error, isLoadMoreShown, searchQuery } =
      this.state;
    return (
      <Layout>
        <Searchbar
          onSubmit={this.handleSubmit}
          inputValue={searchQuery}
          onChange={this.handleChange}
        />
        <Loader isLoading={isLoading} />
        {images.length > 0 && <ImageGallery images={images} />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!isLoading && isLoadMoreShown && (
          <Button onClick={this.handleClickOnLoadBtn} />
        )}
      </Layout>
    );
  }
}

// export class App extends Component {
//   state = {
//     images: [],
//     searchQuery: '',
//     image: '',
//     page: null,
//     isLoading: false,
//     isEndReached: false,
//     error: null,
//   };

//   componentDidMount() {
//     if (this.state.isLoading) {
//       this.fetchImages();
//     }
//   }

//   componentDidUpdate() {
//     if (this.state.isLoading) {
//       this.fetchImages();
//     }
//   }

//   fetchImages = async () => {
//     const { searchQuery, page } = this.state;
//     this.setState({ isLoading: true });

//     try {
//       const response = await fetchImages(searchQuery, page);
//       this.setState(prevState => ({
//         images: [
//           ...prevState.images,
//           ...response.map(({ id, webformatURL, largeImageURL }) => {
//             return { id, webformatURL, largeImageURL };
//           }),
//         ],
//       }));
//       if (response.length < 12) {
//         this.setState({ isEndReached: true });
//       }
//     } catch (error) {
//       this.setState({ error });
//     }

//     this.setState({ isLoading: false });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const { name, images } = this.state;
//     const currentValue = event.target.name.value;

//     if (currentValue === '' && images.length === 0) {
//       Notify.warning('Whoops, incorrectly entered query');
//     }

//     if (currentValue === name) {
//       Notify.info('Enter another query, please :)');
//       return;
//     }

//     this.setState({
//       name: currentValue,
//       images: [],
//       page: 1,
//       isEndReached: false,
//     });
//   };

//   onCloseModalEscape = () => {
//     this.setState({ image: '' });
//   };

//   onCloseModal = event => {
//     if (event.target === event.currentTarget) {
//       this.setState({ image: '' });
//     }
//   };

//   setCurrentImage = img => {
//     this.setState({ image: img });
//   };

//   counterPage = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { images, image, isLoading, isEndReached, error } = this.state;
//     return (
//       <Container>
//         {error &&
//           Notify.failure(
//             `Whoops, something went wrong: ${error.message}. Reload page, please`
//           )}
//         <Searchbar onSubmit={this.handleSubmit} />
//         {images.length > 0 && (
//           <ImageGallery
//             images={images}
//             setCurrentImage={this.setCurrentImage}
//           />
//         )}
//         {image && (
//           <Modal
//             image={image}
//             onCloseModalEscape={this.onCloseModalEscape}
//             onCloseModal={this.onCloseModal}
//           />
//         )}
//         {!isLoading && images.length > 0 && !isEndReached && (
//           <Button title="Load more" showHandler={this.counterPage} />
//         )}
//         {isLoading && <Loader />}
//       </Container>
//     );
//   }
// }