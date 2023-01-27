import Dropdown from "./Dropdown"

const Card = ({text}) => {
    return (
        <div className="bg-white shadow-lg w-3/4 h-4/5 p-6 mt-20 ml-60 rounded">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-2xl">{text}</p>
                <Dropdown/>
            </div>
        </div>
    )
}

export default Card