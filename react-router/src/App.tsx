import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import NoFormsComponent from './components/NoFormsComponent/NoFormsComponent';
import ReactBootstrapFormsComponent from './components/ReactBootstrapFormsComponent/ReactBootstrapFormsComponent';
import DefaultBrowserFromComponent from './components/DefaultBrowserFromComponent/DefaultBrowserFromComponent';
import { Button } from 'react-bootstrap';

type User = { id: number, name: string };

function App() {

  localStorage.setItem("App_localStorage1", JSON.stringify({ id: 10, name: "vlad"}));

  return (
    <div>
    <h1>Basic Example</h1>

    <p>
      This example demonstrates some of the core features of React Router
      including nested <code>&lt;Route&gt;</code>s,{' '}
      <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
      "*" route (aka "splat route") to render a "not found" page when someone
      visits an unrecognized URL.
    </p>

    {/* Routes nest inside one another. Nested route paths build upon
          parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. 
          index означает что раут совпадает с родительским.
          */}

    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="about/:id" element={<AboutComponent />} />
        <Route path="dashboard" element={<DashboardComponent />} />
      </Route>

      <Route path="browser-forms" element={<DefaultBrowserFromComponent />}></Route>
      <Route path="react-bootstrap-forms" element={<ReactBootstrapFormsComponent />}></Route>
      <Route path="no-forms" element={<NoFormsComponent />}></Route>
      <Route path="*" element={<NoMatchComponent />} />
    </Routes>

  </div>
  );
}


function LayoutComponent() {
  const navigation = useNavigate();

  return (
    <div>
      LayoutComponent
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/123">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className='m-1'><Link to="/browser-forms">Browser Forms</Link></li>
          <li className='m-1'><Link to="/react-bootstrap-forms">React Bootstrap Forms</Link></li>
          <li className='m-1'><Link to="/no-forms">No Forms</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}


const HomeComponent = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const AboutComponent = () => {

  const { id } = useParams();

  return (
    <div>
      <h2>About with Id: {id} </h2>
    </div>
  );
}

const DashboardComponent = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

const NoMatchComponent = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
