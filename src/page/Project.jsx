import React from "react";
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class Project extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`
      );
      const response = await api_call.json();
      if (city && country) {
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: "",
        });
      } else {
        this.setState({
          error: "Please fill all fields...",
        });
      }
    } catch (error) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Can not find out this city...",
      });
    }
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="title-container">
                <Titles />
              </div>
              <div className="form-container">
                <Form loadWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
