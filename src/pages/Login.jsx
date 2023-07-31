import React from "react";

const Login = () => {
    return (
        <>
            <section class="vh-100" style={{ backgroundColor: "#508bfc", marginTop: '100px' }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-10" style={{ marginTop: '50px' }}>
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: "1rem;" }}>
                                <div class="card-body p-5">

                                    <h3 class="mb-5">Sign in</h3>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX-2">Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX-2" placeholder="Password">Password</label>
                                    </div>


                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login