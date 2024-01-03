function Signup() {
    return (
      <>
      <br />
      <div>
          <h2 className='text-center'>Sign Up</h2><br />
          <div className='container'>
              <div className="mb-3 col-6 content">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control"/>
              </div>
              <div className="mb-3 col-6 content">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3 col-6 content">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword"/>
                  <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text">
                      Must be 8-20 characters long.
                  </span>
                  </div>
              </div>
          </div>
          <br />
              
          <div className="d-grid gap-2 col-4 mx-auto">
              <button className="btn btn-primary" type="button">Sign Up</button>
              <span className='or'>OR</span>
              <button className="btn btn-outline-dark" type="button">Already have an Account</button>
          </div>
            
      </div>
      </>
    )
  }
  
  export default Signup
  