import PropTypes from "prop-types";

const ByLetter = ({ onLetterHandle }) => {
  return (
    <div>
      <div
        className="mt-5 mr-5  grid grid-cols-3 border rounded-lg"
        onClick={onLetterHandle}
      >
        <div className="p-2">
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="All" />
            <p className="ml-2">All</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="A" />
            <p className="ml-2">A</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="B" />
            <p className="ml-2">B</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="C" />
            <p className="ml-2">C</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="D" />
            <p className="ml-2">D</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="E" />
            <p className="ml-2">E</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="F" />
            <p className="ml-2">F</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="G" />
            <p className="ml-2">G</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="H" />
            <p className="ml-2">H</p>
          </div>
        </div>
        <div className="p-2">
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="I" />
            <p className="ml-2">I</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="J" />
            <p className="ml-2">J</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="K" />
            <p className="ml-2">K</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="L" />
            <p className="ml-2">L</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="M" />
            <p className="ml-2">M</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="N" />
            <p className="ml-2">N</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="O" />
            <p className="ml-2">O</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="P" />
            <p className="ml-2">P</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="Q" />
            <p className="ml-2">Q</p>
          </div>
        </div>
        <div className="p-2">
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="R" />
            <p className="ml-2">R</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="S" />
            <p className="ml-2">S</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="T" />
            <p className="ml-2">T</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="U" />
            <p className="ml-2">U</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="V" />
            <p className="ml-2">V</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="W" />
            <p className="ml-2">W</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="X" />
            <p className="ml-2">X</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="Y" />
            <p className="ml-2">Y</p>
          </div>
          <div className="flex items-center mb-1">
            <input type="radio" className="radio" name="radio-1" value="Z" />
            <p className="ml-2">Z</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ByLetter.propTypes = {
  onLetterHandle: PropTypes.node,
};

export default ByLetter;
