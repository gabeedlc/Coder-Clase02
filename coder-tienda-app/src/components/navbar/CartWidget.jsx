import { HiOutlineShoppingCart } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';


// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/js/dist/dropdown.js'; 

const CartWidgetComponent = () => {

    return (
        <>
            <button type="button" className="btn btn-outline-secondary me-2">
                <HiOutlineShoppingCart /><span className="badge bg-secondary ms-2">0</span>
            </button>
        </>
    )
}

export default CartWidgetComponent