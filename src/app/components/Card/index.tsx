import { CardContent, Card as MuiCard } from "@mui/material";
import { Container, Description, Icon, Title } from "./styles";

interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <Container>
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
