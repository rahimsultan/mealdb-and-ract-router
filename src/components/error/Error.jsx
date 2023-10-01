import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    const {status,statusText }=error;
  return (
    <div className="flex justify-center items-center flex-col h-screen">
        <h2 className="text-4xl font-bold">{status}</h2>
        <h2 className="text-2xl font-bold">{statusText}</h2>
        <Link to='/' className="bg-black rounded-sm px-4 py-1 my-2 hover:bg-slate-700 text-white">Go Home</Link>
    </div>
  )
}

export default Error