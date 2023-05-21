import CardProduct from "../Components/CardProduct";
import SideBar from "../Components/SideBar";
import circle1 from '../assets/Circle1.png';
import circle2 from '../assets/Circle2.png';
import circle3 from '../assets/Circle3.png';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-bgColor">
            <SideBar/>
        <div className='absolute w-[1136px] h-[500px] bg-white top-[100px] left-[300px]'>
            <div className="row">
                <div className="col">
                    <p className='absolute left-[40px] top-[40px]'>Products</p>
                </div>
                <div className="col">
                    <input type="checkbox" className="absolute left-[500px] top-[47px]"/>
                    <p className='absolute left-[520px] top-[40px]'>Hide expired product</p>
                </div>
                <div className="col">
                    <p className='absolute left-[700px] top-[40px]'>All Category</p>
                </div>
                <div className="col">
                    <button onClick={() => navigate('/addproduct')} type="button" class="absolute left-[900px] top-[40px] bg-indigo-600 text-white text-sm leading-6 font-medium rounded bg-buttonColor w-[173px] h-[38px]">All New Products</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className='absolute left-[40px] top-[120px]'>Product Name</p>
                </div>
                <div className="col">
                    <p className='absolute left-[320px] top-[120px]'>Description</p>
                </div>
                <div className="col">
                    <p className='absolute left-[500px] top-[120px]'>Product Price</p>
                </div>
                <div className="col">
                    <p className='absolute left-[660px] top-[120px]'>Category</p>
                </div>
                <div className="col">
                    <p className='absolute left-[800px] top-[120px]'>Expiry Date</p>
                </div>
                <div className="col">
                    <p className='absolute left-[950px] top-[120px]'>ACTION</p>
                </div>
            </div>
            <div className="mt-[180px]">
                <CardProduct image={circle1} name="Carrot Muffin" desc="Maecenas tristique, est et tempus semper, est quam pharetra magna" price="Rp599.000" category="Ready"/>
            </div>
            <div className="mt-[280px]">
                <CardProduct image={circle2} name="Montreal Steak Spice" desc="Cras mi pede, malesuada in, imperdiet et" price="Rp199.000" category="Pre-Order" date="3 Maret 2022" />
            </div>
            <div className="mt-[380px]">
                <CardProduct image={circle3} name="Chicken Wings" desc="Donec ut mauris eget massa tempor convallis" price="Rp99.000" category="Ready" date="21 September 2022"/>
            </div>
        </div>
        </div>
    )
}

export default Products;