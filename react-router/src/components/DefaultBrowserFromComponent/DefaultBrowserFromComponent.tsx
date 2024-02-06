import { Link } from "react-router-dom";

type DefaultFormData = {
    email2: { value: string };
    password: { value: string };
    isApprove: { checked: boolean };
};

const DefaultBrowserFromComponent = () => {
    return (
      <div className='m-3'>
        <li><Link to="/">Go Home</Link></li>
        <div>DefaultBrowserFromComponent </div>
  
        <form
              onSubmit={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  const target: DefaultFormData = e.target as typeof e.target & DefaultFormData;
                  const email = target.email2.value; // typechecks!
                  const password = target.password.value; // typechecks!
                  const isApprove = target.isApprove.checked; // typechecks!
  
                  console.log(email);
                  console.log(password);
                  console.log(isApprove);
              }}>
          <div>
              <label>
                  Email:
                  <input id="email2" className="m-2" type="email" name="email" />
              </label>
          </div>
          <div>
              <label>
                  Password:
                  <input className="m-2" type="password" name="password" />
              </label>
          </div>
          <div>
              <label>
                  Approve:
                  <input className="m-2" type="checkbox" name="isApprove" />
              </label>
          </div>
          <div>
              <input type="submit" value="Log in" />
          </div>
      </form>
  
    </div>)
  }

  export default DefaultBrowserFromComponent;