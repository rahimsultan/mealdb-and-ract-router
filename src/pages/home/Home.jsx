import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
      {
        navigation.state === 'loading'? <Loader/> :<Outlet></Outlet>
      }
      </div>
    </>
  )
}

export default Home