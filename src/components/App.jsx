import { Component } from 'react';
import Notiflix from 'notiflix';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';
import searchImages from './services';

export class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchValue !== this.state.searchValue
    ) {
      await this.getImages();
    }
  }

  getImages = async () => {
    this.setState({ isLoading: true });
    if (this.state.searchValue === '') {
      this.setState({
        isLoading: false,
      });
      return Notiflix.Notify.warning('Please, enter another search parameters');
    }

    try {
      const {
        data: { hits, totalHits },
      } = await searchImages(this.state.searchValue, this.state.page);

      if (this.state.page === 1) {
        if (!totalHits) {
          this.setState({
            isLoading: false,
          });
          return Notiflix.Notify.failure('No results, try again');
        }

        Notiflix.Notify.success(
          `Please, enter another search parameters ${totalHits}`
        );

        this.setState({
          totalHits,
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isLoading: !prevState.isLoading,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      Notiflix.Notify.failure(`Error - ${error.message}`);
    }
  };

  onSubmit = searchValue => {
    // event.preventDefault();
    this.setState(_ => ({
      searchValue,
      images: [],
      page: 1,
      totalHits: 0,
      isLoading: false,
      error: null,
    }));
  };

  handleClick = event => {
    event.preventDefault();
    this.setState(prevPage => ({
      page: prevPage.page + 1,
    }));
  };

  render() {
    const { images, totalHits, isLoading, error } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {error && (
          <h2 style={{ margin: 'auto' }}>Something went wrong, try again</h2>
        )}
        {/* {console.log(11111, isLoading)}
        {console.log(2222, images)} */}
        {!isLoading && images.length > 0 && <ImageGallery data={images} />}
        {images.length < totalHits && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}
