import { Photos } from "src/pages";
import { fetchPhotosListOnFirstStart } from "src/slices/photos";
import { connect } from "react-redux";

const mapStatetoProps = (state) => ({
  photos: state.photos.photos,
  isLoading: state.photos.isLoading,
  nextPage: state.photos.nextPage,
});

export default connect(mapStatetoProps, { fetchPhotosListOnFirstStart })(
  Photos
);
