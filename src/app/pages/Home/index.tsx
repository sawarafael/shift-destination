import AltRouteIcon from "@mui/icons-material/AltRoute";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components";
import { Container } from "./style";

const Home = () => {
  const navigate = useNavigate();

  const EntitiesMap = [
    {
      title: "Cliente",
      description: "Gerencie os clientes da aplicação",
      icon: <GroupsIcon />,
      onClick: () => {
        navigate("/clients");
      },
    },
    {
      title: "Condutor",
      description: "Gerencie os condutores da aplicação",
      icon: <GroupIcon />,
      onClick: () => {
        navigate("/drivers");
      },
    },
    {
      title: "Deslocamentos",
      description: "Gerencie os deslocamentos na aplicação",
      icon: <AltRouteIcon />,
      onClick: () => {
        navigate("/shifts");
      },
    },
    {
      title: "Veículos",
      description: "Gerencie os veículos da aplicação",
      icon: <DirectionsCarIcon />,
      onClick: () => {
        navigate("/vehicles");
      },
    },
  ];

  return (
    <Container>
      {EntitiesMap.map(({ title, description, icon, onClick }) => (
        <Card
          key={title}
          title={title}
          description={description}
          icon={icon}
          onClick={onClick}
        />
      ))}
    </Container>
  );
};

export default Home;
