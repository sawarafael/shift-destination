import { Box, Skeleton } from "@mui/material";
import { Button, DataTable } from "app/components";
import useClientList from "app/hooks/clients/useClientList";
import { listColumnsData } from "base/data/mock/client/listColumnsData";
import { useNavigate } from "react-router-dom";
import { Actions, Container, Content, Header } from "./styles";

const Clients = () => {
  const navigate = useNavigate();

  const { data, isError, isLoading, isSuccess, refetch, status } =
    useClientList();

  return (
    <Container>
      <Header>
        <h1>Lista de Clientes</h1>
        <Actions>
          <Button onClick={() => refetch()} variant="contained">
            Atualizar
          </Button>
          <Button onClick={() => navigate(-1)} variant="outlined">
            Retornar
          </Button>
        </Actions>
      </Header>
      <Content>
        {isLoading && (
          <Box sx={{ width: "100%", height: "100%" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        )}
        {isError && (
          <p>
            {status}: Infelizmente não foi possível recuperar os dados
            necessários.
          </p>
        )}
        {isSuccess && (
          <DataTable
            columns={listColumnsData}
            data={data ? data : []}
            rowId={(row) => row.id}
          />
        )}
      </Content>
    </Container>
  );
};

export default Clients;
