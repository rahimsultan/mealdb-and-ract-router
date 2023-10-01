import ClockLoader from "react-spinners/ClockLoader"
const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-52">
        <ClockLoader
            color="#6734f7"
            size={250}
            />
    </div>
  )
}

export default Loader