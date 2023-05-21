const CardUsers = (props) =>{
    return (
        <div className="row">
                <div className="col">
                   <img src={props.image} className="absolute left-[40px] w-[68px] h-[68px]"/> 
                </div>
                <div className="col">
                    <p className='absolute left-[120px] font-semibold mt-[20px]'>{props.name}</p>
                </div>
                <div className="col">
                    <p className='absolute left-[400px] text-greenFont mt-[20px]'>{props.email}</p>
                </div>
            </div>
    )
}

export default CardUsers;