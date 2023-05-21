import { useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import SideBar from "../Components/SideBar";

const AddProduct = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-bgColor">
            <SideBar/>
        <div className='absolute w-[1136px] h-[600px] bg-white top-[100px] left-[300px]'>
            <div className="row">
                <div className="col">
                    <p className='absolute left-[40px] top-[40px] text-buttonColor font-semibold'>Products</p>
                </div>
                <div className="col">
                    <p className='absolute left-[110px] top-[40px]'>/ Add New Product</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="absolute top-[120px] ml-[40px] w-[240px] h-[38px]">
                        <InputField title="Product Name" placeholder="Enter product name"/>
                    </div>
                </div>
                <div className="col">
                    <div className="absolute top-[120px] ml-[300px] w-[240px]  h-[38px]">
                        <InputField title="Product Price" placeholder="Enter product price"/>
                    </div>
                </div>
                <div className="col">
                    <div className="absolute top-[120px] ml-[560px] w-[240px]  h-[38px]">
                        <InputField title="Product Category" placeholder="Enter product category"/>
                    </div>
                </div>
                <div className="col">
                    <div className="absolute top-[220px] ml-[40px] w-[764px]  h-[110px]">
                        <label for="message" class="block text-gray-700 text-md font-bold mb-3">Product Description</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Enter product description"></textarea>
                    </div>
                </div>
                <div className="col">
                    <input type="checkbox" className="absolute left-[40px] top-[400px]"/>
                    <p className='absolute left-[60px] top-[393px]'>Product has expiry date</p>
                </div>
                <div className="col">
                    <input type="checkbox" className="absolute left-[40px] top-[400px]"/>
                    <p className='absolute left-[60px] top-[393px]'>Product has expiry date</p>
                </div>
                <div className="col">
                    <div className="absolute top-[430px] ml-[40px] w-[240px]  h-[38px]">
                        <InputField title="Expiry Date" type="date" placeholder="Enter product category"/>
                    </div>
                </div>
                <div className="col">
                    <button type="button" class="absolute left-[860px] top-[540px] border text-gray text-sm leading-6 font-medium rounded bg-white w-[100px] h-[38px]">Cancel</button>
                    <button onClick={() => navigate('/products')} type="button" class="absolute left-[980px] top-[540px]  text-white text-sm leading-6 font-medium rounded bg-buttonColor w-[100px] h-[38px]">Save</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddProduct;