const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg p-6 rounded-2xl flex flex-col ${className}`}>
      {children}
    </div>
  )
}

export default Card
