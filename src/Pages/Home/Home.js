import {useAxios} from "../../Hooks/useAxios";

import Navbar from '../../Components/Layout/Navbar/Navbar.js';
import Products from '../../Components/Products';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/Layout/ErrorMessage'

const Home = () => {
    const {data , loading, error} = useAxios("/products")
    // console.log("data", data, "loading", loading, "error", error)

    if(loading) return <Loader />;

    if (error) return <ErrorMessage message={"la BDD"}/>;
    return (
        <>
        <Navbar />
        <Products data={data}/>
        </>
     );
}

export default Home;