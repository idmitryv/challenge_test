import React from "react";

type Props = {
  Title: React.FC;
  Right?: React.FC;
  Left?: React.FC;
}

const Header = ({ Title, Right, Left }: Props): JSX.Element => {

  return (
    <div
      className="w-full flex items-center justify-center relative bg-white-smoke py-4"
    >
      {Left && <div className="absolute l-0"><Left /></div>}
      <Title />
      { Right && <div className="absolute r-0"><Right/></div> }
    </div>
  );
};

export default Header;
