import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBCol,
    MDBContainer,
    MDBInputGroup,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Weather() {

    const [weather, setWeather] = useState([]);

    const [form, setForm] = useState({
        city: '',
        country: ''
    });

    const APIKEY = "2744ec99d729cd9e1e2ff90b304d4fdc";

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&units=imperial&appid=${APIKEY}`;

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

                        <MDBInputGroup className="mb-3 mr-1">
                            <input
                                type='text'
                                name='city'
                                placeholder='City'
                                className="me-1"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type='text'
                                name='country'
                                placeholder='Country'
                                className="me-1"
                                onChange={(e) => handleChange(e)}
                            />

                            <Button
                                variant='primary'
                                className="btn-primary"
                                onClick={(e) => weatherData(e)}
                            >
                                Check!
                            </Button>

                        </MDBInputGroup>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {
                weather.data !== undefined ?

                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>

                    : null
            }

        </section>
    )
}