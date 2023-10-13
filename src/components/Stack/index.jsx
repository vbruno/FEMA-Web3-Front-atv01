import PropTypes from "prop-types";

export function Stack({ name }) {
  return <span>#{name}</span>;
}

Stack.prototypes = {
  name: PropTypes.string
}

Stack.defaultProps = {
  name: "default",
}
