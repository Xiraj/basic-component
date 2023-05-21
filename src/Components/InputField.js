const InputField = (props) =>{
    return (
        <div>
            <h3 className="block text-gray-700 text-md font-bold mb-3">
                {props.title}
            </h3>
            <input className="border w-full py-3 px-4 text-gray-700 leading-tight h-full " type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField;