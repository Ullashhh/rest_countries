import ByCapital from "../ByCapital/ByCapital";
import ByLetter from "../ByLetter/ByLetter";
import ByName from "../ByName/ByName";
import ByRegion from "../ByRegion/ByRegion";
import PropTypes from "prop-types";
import { LuPanelLeftOpen } from "react-icons/lu";



const Drawer = ({onCapitalHandle, onLetterHandle, onRegionHandle, onSearchHandle}) => {
    return (
      <div className="-ml-5 -mt-10 z-0 fixed">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <label htmlFor="my-drawer" className="btn drawer-button">
              <LuPanelLeftOpen />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 mt-16 text-base-content">
              <ByName onSearchHandle={onSearchHandle}></ByName>
              <ByRegion onRegionHandle={onRegionHandle}></ByRegion>
              <ByLetter onLetterHandle={onLetterHandle}></ByLetter>
              <ByCapital onCapitalHandle={onCapitalHandle}></ByCapital>
            </ul>
          </div>
        </div>
      </div>
    );
};


Drawer.propTypes = {
  onRegionHandle: PropTypes.node,
  onCapitalHandle: PropTypes.node,
  onSearchHandle: PropTypes.node,
  onLetterHandle: PropTypes.node
};

export default Drawer;