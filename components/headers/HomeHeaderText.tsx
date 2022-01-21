import Header from "./Header"

type Props = {
  Text: string;

}

const HomeHeaderText = ({Text}:Props) => {

  const title = () => (<>
    
    <span className="text-black font-medium text-xl">{Text}</span>
  </>)

  return (<Header Title={title}></Header>)
}

export default HomeHeaderText;
