import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const variableMessage = 'Dynamic variable message';
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // console.log(data)

      if (data.status === 200) {
        console.log(data.status)

        handleShowToast('Login Successfully');
        setIsLoggedIn(true)
        setTimeout(() => {
          navigate('/')
        }, 1000);


      }
      else if (!response.ok) {
        handleShowToast('Invalid crendentials');
      }
      // Save the token in local storage or a cookie
      //   localStorage.setItem('token', data.token);

      // Redirect the user to the desired page (e.g., dashboard)
      // You can use react-router-dom to handle routing
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure and display error messages
    }
  };

  const handleShowToast = (message) => {
    toast.success(`${message}!`, {
      position: 'top-right',
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };




  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#508bfc", marginTop: '100px' }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-10" style={{ marginTop: '50px' }}>
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{ borderRadius: "1rem;" }}>
                <div class="card-body p-5">

                  <h3 class="mb-5">Sign in</h3>
                  <form onSubmit={handleLogin}>
                    <div class="form-outline mb-4">
                      <input type="text" id="typeEmailX-2"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX-2">Email</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="typePasswordX-2" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX-2" placeholder="Password">Password</label>
                    </div>


                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Login