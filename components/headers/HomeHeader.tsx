import Header from "./Header"
import HomeIcon from "../../svgs/home.svg"

const HomeHeader = () => {
  const title = () => (<>
    <HomeIcon className="mr-2" />
    <span className="text-accent font-medium text-xl">Home</span>
    <span className="text-black font-medium text-xl">Page</span>
  </>)

  return (<Header Title={title}></Header>)
}

export default HomeHeader;