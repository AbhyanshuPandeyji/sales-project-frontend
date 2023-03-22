import react from 'react'

const Login = () => {
    return (
        <div>
            <h1 className="mt-5">
                Login
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded'>
                    <div className="mb-3 m-3">
                        <label for="Login-Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Login-Email" aria-describedby="emailHelp" required="@" />
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Login-Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Login-Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary container col-11 m-3">Submit</button>
                </form>
            </div>
        </div>
    )

}


export default Login;
