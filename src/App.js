import {
  Contacts,
  CookiesPolicy,
  Info,
  Teachers,
  What,
  Where,
  Peculiarities,
} from "./components";

const App = () => (
  <div className="w-screen bg-gray">
    <CookiesPolicy />
    <Info />
    <What />
    <Where />
    <Peculiarities />
    <Teachers />
    <Contacts />
  </div>
);

export default App;
