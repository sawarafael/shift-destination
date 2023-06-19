import { CardContent, Card as MuiCard } from "@mui/material";
import { Container, Description, Icon, Title } from "./styles";

interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  onClick?: () => void;
}

const Card = ({ title, description, icon, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      <MuiCard sx={{ mb: 2, width: 250 }} elevation={2}>
        <CardContent>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardContent>
      </MuiCard>
    </Container>
  );
};

export default Card;
