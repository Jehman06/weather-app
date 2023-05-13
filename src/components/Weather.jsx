import React, { useState } from "react";
import DisplayWeatherF from "./DisplayWeatherF";
import DisplayWeatherC from "./DisplayWeatherC";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBCol,
    MDBContainer,
    MDBInputGroup,
    MDBRow,
    MDBTypography,
    MDBRadio
} from "mdb-react-ui-kit";

export default function Weather() {

    const [weather, setWeather] = useState([]);

    const [form, setForm] = useState({
        city: '',
        country: ''
    });

    const [unit, setUnit] = useState('Metric');

    const APIKEY = "2744ec99d729cd9e1e2ff90b304d4fdc";

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`;

    // Fetch data
    async function weatherData(e) {
        e.preventDefault();

        if (form.city == "") {
            alert("Search for a city")
        } else {
            const data = await fetch(endpoint)
                .then((res) => res.json())
                .then((data) => data);

            console.log(data)

            setWeather({ data: data });
        }
    }

    // Unit radios state toggle
    const handleUnitChange = () => {
        if (unit === "Imperial") {
            setUnit("Metric")
        } else {
            setUnit("Imperial")
        }
        console.log(unit)
    }

    // Search bar
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value });
        }

        if (name === "country") {
            setForm({ ...form, country: value });
        }
    };

    return (
        <section className="vh-100">
            <MDBContainer className="py-5">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="8" lg="6" xl="4">
                        <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
                            Check the weather!
                        </MDBTypography>

                        <MDBInputGroup className="mb-3 mr-1" style={{ display: "inline-block" }}>
                            <input
                                type='text'
                                name='city'
                                placeholder='City'
                                className="me-1"
                                style={{ height: "auto", borderRadius: "10px", float: "left" }}
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type='text'
                                name='country'
                                placeholder='Country'
                                className="me-1"
                                style={{ height: "auto", borderRadius: "10px", float: "left" }}
                                onChange={(e) => handleChange(e)}
                            />

                            <Button
                                variant='primary'
                                className="btn-primary mb-3 mr-1"
                                style={{ borderRadius: "10px", float: "left", }}
                                onClick={(e) => weatherData(e)}
                            >
                                Check!
                            </Button>

                        </MDBInputGroup>

                        <div className="mb-4 p-2">
                            <MDBRadio
                                inline
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                label="Imperial"
                                onChange={(e) => handleUnitChange(e)}
                                defaultChecked
                            />
                            <MDBRadio
                                inline
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                label="Metric"
                                onChange={(e) => handleUnitChange(e)}
                            />
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* Display either Metric or Imperial values based on unit radios using ternary operator, or nothing if search = undefined */}
            {
                weather.data !== undefined && unit === "Metric" ?

                    <div>
                        <DisplayWeatherF data={weather.data} />
                    </div>

                    : weather.data !== undefined && unit === "Imperial" ?

                        <div>
                            <DisplayWeatherC data={weather.data} />
                        </div>

                        : null
            }

        </section>
    )
}