import PropTypes from "prop-types";

export const logShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  slug: PropTypes.string,
};
