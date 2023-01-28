const Card = ({ children, title }) => {
    return (
        <div className="bg-white shadow-lg w-full h-[80vh] p-6 rounded">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-2xl">{title}</p>
                {children}
            </div>
        </div>
    )
}

export default Card
