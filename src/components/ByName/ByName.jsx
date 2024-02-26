import PropTypes from "prop-types";

const ByName = ({ onSearchHandle }) => {
  return (
    <div>
      <label className="input input-bordered flex items-center px-2 mr-4">
        <input
          onChange={onSearchHandle}
          type="text"
          className="grow"
          placeholder="Search by name"
          name="name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-8 h-8 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

ByName.propTypes = {
    onSearchHandle : PropTypes.node,
}

export default ByName;
