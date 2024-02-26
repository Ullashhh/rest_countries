import PropTypes from "prop-types";

const ByRegion = ({ onRegionHandle }) => {
  return (
    <div>
      <select
        onChange={onRegionHandle}
        className="select select-bordered mt-4 px-2 w-52"
      >
        <option>All</option>
        <option>Asia</option>
        <option>Africa</option>
        <option>Europe</option>
        <option>Oceania</option>
        <option>Americas</option>
      </select>
    </div>
  );
};

ByRegion.propTypes = {
  onRegionHandle: PropTypes.node,
};

export default ByRegion;
