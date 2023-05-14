import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with me on social networks:</span>
                </div>

                <div>
                    <a href="mailto: jeremy.lehmann06@icloud.com" className="me-4 text-center text-reset" target="_blank">
                        <MDBIcon fas icon="at" />
                    </a>

                    <a href="https://linkedin.com/in/jeremy-lehmann" className="me-4 text-center text-reset" target="_blank">
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href="https://github.com/Jehman06" className="me-4 text-center text-reset" target="_blank">
                        <MDBIcon fab icon="github" />
                    </a>

                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="fa-solid fa-user" className="me-3">
                                    Jeremy Lehmann
                                </MDBIcon>
                            </h6>
                            <p>
                                I am a passionate developer with experience in a variety of technologies, including JavaScript, React, Express, Python, both NoSQL and SQL databases, and other frameworks/libraries.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Technologies Used</h6>
                            <p>
                                <a href="https://react.dev/" className="text-reset" target="_blank">
                                    React
                                </a>
                            </p>
                            <p>
                                <a href="https://getbootstrap.com/" className="text-reset" target="_blank">
                                    Bootstrap
                                </a>
                            </p>
                            <p>
                                <a href="https://mdbootstrap.com/" className="text-reset" target="_blank">
                                    MDB
                                </a>
                            </p>
                            <p>
                                <a href="https://openweathermap.org/api" className="text-reset" target="_blank">
                                    OpenWeather API
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                San Diego, CA 92101, USA
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                <a href="mailto: jeremy.lehmann06@icloud.com" className="text-reset">jeremy.lehmann06@icloud.com</a>
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />
                                <a href="tel: 6199281372" className="text-reset">619-928-1372</a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </MDBFooter>
    )
}