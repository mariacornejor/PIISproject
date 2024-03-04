type Props = {
  imagen: string;
};

import SquishyCard from "./SquishyCard";

function Carruselitem(props: Props) {
  let imagen = props.imagen;

  return (
    <div>
      {imagen}
      <SquishyCard />
    </div>
  );
}

export default Carruselitem;
