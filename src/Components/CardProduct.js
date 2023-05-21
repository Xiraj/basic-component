const CardProduct = (props) =>{
    return (
        <div className="row">
                <div className="col">
                   <img src={props.image} className="absolute left-[40px] w-[68px] h-[68px]"/> 
                </div>
                <div className="col">
                    <p className='absolute left-[120px] font-semibold mt-[20px]'>{props.name}</p>
                </div>
                <div className="col">
                    <div className='absolute left-[320px] text-[14px] w-[160px]'>
                        {props.desc}
                    </div>
                </div>
                <div className="col">
                    <p className='absolute left-[500px] text-greenFont mt-[20px]'>{props.price}</p>
                </div>
                <div className="col">
                    <p className='absolute left-[660px] mt-[20px]'>{props.category}</p>
                </div>
                <div className="col">
                    <p className='absolute left-[800px] mt-[20px]'>{props.date}</p>
                </div>
                <div className="col">
                    <p className='absolute left-[950px] mt-[20px]'>{props.action}</p>
                </div>
            </div>
    )
}

export default CardProduct;