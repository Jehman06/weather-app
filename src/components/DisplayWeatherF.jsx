import React from "react";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function DisplayWeatherF(props) {
    const { data } = props;

    const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";

    // If user enters a city that doesn't exist, this data will be null and not cause an error
    let timezone = data.cod != 404 ? data.timezone : null
    let sunrise = data.cod != 404 ? data.sys.sunrise : null
    let sunset = data.cod != 404 ? data.sys.sunset : null

    let localSunrise = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('LT');
    let localSunset = moment.utc(sunset, 'X').add(timezone, 'seconds').format('LT');

    let timezoneInMinutes = timezone / 60;
    let localTime = moment().utcOffset(timezoneInMinutes).format("LT");

    return (
        <section className="vh-100">
            {
                data.cod != 404 ?

                    <React.Fragment>
                        <MDBContainer>
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol md="8" lg="6" xl="8">
                                    <MDBCard className="shadow-0 border">
                                        <MDBCardBody className="p-4" style={{ margin: '30px' }}>
                                            <MDBTypography
                                                tag="h4"
                                                className="mb-1 sfw-normal"
                                            >
                                                {data.name}, {data.sys.country}
                                            </MDBTypography>
                                            <p>{localTime}</p>
                                            <br />
                                            <MDBRow>
                                                <MDBCol md="6">
                                                    <span>{data.weather[0].description}</span>
                                                    <img src={iconurl}
                                                        alt={data.weather[0].description}
                                                    />
                                                    <p>
                                                        Current temperature: <strong>{Math.round((data.main.temp - 273.15) * 9 / 5 + 32)} °F</strong>
                                                    </p>
                                                    <p>
                                                        Feels like: <strong>{Math.round((data.main.feels_like - 273.15) * 9 / 5 + 32)} °F</strong>
                                                    </p>
                                                    <p>
                                                        Max: <strong>{Math.round((data.main.temp_max - 273.15) * 9 / 5 + 32)} °F</strong>, Min: <strong>{Math.round((data.main.temp_min - 273.15) * 9 / 5 + 32)} °F</strong>
                                                    </p>
                                                    <p>
                                                        Humidity: <strong>{data.main.humidity}%</strong>
                                                    </p>
                                                </MDBCol>
                                                <MDBCol md="6">
                                                    <p>
                                                        Wind: <strong>{Math.round(data.wind.speed * 2.237)} mph</strong>
                                                    </p>
                                                    <p>
                                                        Visibility: <strong>{Math.round(data.visibility / 1609)} miles</strong>
                                                    </p>
                                                    <p>
                                                        Pressure: <strong>{Math.round((data.main.pressure * 0.029529980164712) * 10) / 10} inHg</strong>
                                                    </p>
                                                    <p>
                                                        Sunrise: <strong>{localSunrise}</strong>
                                                    </p>
                                                    <p>
                                                        Sunset: <strong>{localSunset}</strong>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </React.Fragment>

                    : <MDBContainer className="py-5">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol md="8" lg="6" xl="4">
                                <MDBCard className="shadow-0 border">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography
                                            tag="h4"
                                            className="mb-1 sfw-normal"
                                        >
                                            {data.message}
                                        </MDBTypography>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            }
        </section>
    )
}