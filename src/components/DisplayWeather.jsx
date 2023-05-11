import React from "react";
import moment from "moment";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function DisplayWeather(props) {
    const { data } = props;

    const iconurl = "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";

    let timezone = data.timezone
    let sunrise = data.sys.sunrise
    let sunset = data.sys.sunset

    let localSunrise = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('LT');
    let localSunset = moment.utc(sunset, 'X').add(timezone, 'seconds').format('LT');

    return (
        <section className="vh-100">
            <MDBContainer className="py-5">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="8" lg="6" xl="4">
                        <MDBCard className="shadow-0 border">
                            <MDBCardBody className="p-4">
                                <MDBTypography
                                    tag="h4"
                                    className="mb-1 sfw-normal"
                                >
                                    {data.name}, {data.sys.country}
                                </MDBTypography>
                                <span>{data.weather[0].description}</span>
                                <img src={iconurl} />
                                <p className="mb-2">
                                    Current temperature: <strong>{Math.round(data.main.temp)} °F</strong>
                                </p>
                                <p>
                                    Feels like: <strong>{Math.round(data.main.feels_like)} °F</strong>
                                </p>
                                <p>
                                    Max: <strong>{Math.round(data.main.temp_max)} °F</strong>, Min: <strong>{Math.round(data.main.temp_min)} °F</strong>
                                </p>
                                <p>
                                    Humidity: <strong>{data.main.humidity}%</strong>
                                </p>
                                <p>
                                    Wind: <strong>{data.wind.speed} mph</strong>
                                </p>
                                <p>
                                    Visibility: <strong>{Math.round(data.visibility / 1609)} miles</strong>
                                </p>
                                <p>
                                    Pressure: <strong>{data.main.pressure} hPa</strong>
                                </p>
                                <p>
                                    Sunrise: <strong>{localSunrise}</strong>
                                </p>
                                <p>
                                    Sunset: <strong>{localSunset}</strong>
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}