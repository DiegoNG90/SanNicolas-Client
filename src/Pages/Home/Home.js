import {useAxios} from "../../Hooks/useAxios"

import Navbar from '../../Components/Layout/Navbar'
import Products from '../../Components/Products'
import Loader from '../../Components/Loader'

const Home = () => {
    const {data , loading, error} = useAxios("/products")
    console.log("data", data, "loading", loading, "error", error)
    return (
        <>
        <Navbar />
        <Products />
        <Loader />
        </>
     );
}

export default Home;