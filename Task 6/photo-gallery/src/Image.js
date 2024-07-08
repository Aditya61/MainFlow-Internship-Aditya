import React from 'react';

function Image({ name, onClick }) {
  return (
    <div className="border-black border-2" onClick={onClick}>
      <img className="w-auto h-40 lg:h-80 cursor-pointer" alt={name.substr(1)} src={require(`./images${name}`)} />
    </div>
  );
}

export default Image;
