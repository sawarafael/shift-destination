import AltRouteIcon from "@mui/icons-material/AltRoute";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import { Card } from "../../components";
import { Container } from "./style";

const EntitiesMap = [
  {
    title: "Cliente",
    description: "Gerencie os clientes da aplicação",
    icon: <GroupsIcon />,
  },
  {
    title: "Condutor",
    description: "Gerencie os condutores da aplicação",
    icon: <GroupIcon />,
  },
  {
    title: "Deslocamentos",
    description: "Gerencie os deslocamentos na aplicação",
    icon: <AltRouteIcon />,
  },
  {
    title: "Veículos",
    description: "Gerencie os veículos da aplicação",
    icon: <DirectionsCarIcon />,
  },
];

const Home = () => {
  return (
    <Container>
      {EntitiesMap.map(({ title, description, icon }) => (
        <Card key={title} title={title} description={description} icon={icon} />
      ))}
    </Container>
  );
};

export default Home;
