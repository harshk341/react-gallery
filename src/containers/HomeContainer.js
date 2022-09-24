import { Home } from 'src/pages';
import { getPhotosList } from "src/slices/photos";
import { connect } from "react-redux";

const mapStatetoProps = (state) => ({
  photos: state.photos.photos,
  isLoading: state.photos.isLoading,
  nextPage: state.photos.nextPage,
});

export default connect(mapStatetoProps, { getPhotosList })(Home);
