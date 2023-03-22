import react from 'react'

const Register = () => {
    return (
        <div>
            <h1 className="mt-5">
                Register
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded'>
                    <div className="mb-3 m-3">
                        <label for="Register-Firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="Register-Firstname" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="Register-Lastname" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Register-Email" aria-describedby="emailHelp" required="@" />
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Register-Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary container col-11 m-3">Submit</button>
                </form>
            </div>
        </div>
    )

}


export default Register;
