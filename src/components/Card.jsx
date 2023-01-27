const Card = ({ children, title }) => {
  return (
    <div className="bg-white shadow-lg w-full h-[80vh] p-6 rounded flex flex-col">
      {children}
    </div>
  )
}

export default Card
