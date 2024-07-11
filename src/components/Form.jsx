import PropTypes from "prop-types";

const Form = (props) => {
  return (
    <form onSubmit={props.loadWeather} className="mb-4">
      <input
        type="text"
        name="city"
        placeholder="City..."
        className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="country"
        placeholder="Country..."
        className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
      />
      <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
        Get Weather
      </button>
    </form>
  );
};

Form.propTypes = {
  loadWeather: PropTypes.func.isRequired,
};

export default Form;
