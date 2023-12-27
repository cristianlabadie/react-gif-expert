import PropTypes from "prop-types";

export const GifCard = ({ url, title }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
