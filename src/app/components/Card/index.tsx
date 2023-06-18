import { CardContent, Card as MuiCard } from "@mui/material";
import { Title } from "./styles";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <MuiCard>
      <CardContent>
        <Title></Title>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
