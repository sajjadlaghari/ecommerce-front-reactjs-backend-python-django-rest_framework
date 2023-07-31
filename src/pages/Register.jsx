import React from "react";

const Register = () => {
    return (
        <>
            <section class="vh-100" style={{ backgroundColor: "#508bfc", marginTop: '100px' }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-10" style={{ marginTop: '50px' }}>
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: "1rem;" }}>
                                <div class="card-body p-5">

                                    <h3 class="mb-5 text-center">Sign Up</h3>

                                    <div class="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX-2" placeholder="First Name">First Name</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX-2" placeholder="Last Name">Last Name</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX-2" placeholder="Email">Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX-2" placeholder="Password">Password</label>
                                    </div>

                                    <div class="form-check d-flex justify-content-start mb-4">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    </div>

                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Register</button>

                                    <hr class="my-4" />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register