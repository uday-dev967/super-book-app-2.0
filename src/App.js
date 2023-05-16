import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from "./component/HomePage";
import FormPage from "./component/FormPage";
import Header from "./component/Header"
import SuccessSubminssion from "./component/SuccessSubmission";
import './App.css';
import FailureView from "./component/FailureView";
import NotFound from "./component/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/form-page" element={<FormPage />} />
        <Route exact path="/failed-view" element={<FailureView />} />
        <Route exact path="/sucess" element={<SuccessSubminssion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
