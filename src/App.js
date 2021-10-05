import './App.css';
import ApplicationForm from './component/ApplicationForm';
import List from './component/List';
import Product from './component/Product';
import Productcart from './component/Productcart';


function App() {
  return (
    <div>
      <h4 className="text-center">Assignment 1</h4>
      <List/>

      <h4 className="text-center">Assignment 2</h4>
      <ApplicationForm/>

      <h4 className="text-center">Assignment 3</h4>
      <Product/>

      <h4 className="text-center">Assignment 4</h4>
      <Productcart/>

    </div>
  );
}

export default App;
