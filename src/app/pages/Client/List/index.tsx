import { Box, Skeleton } from "@mui/material";
import DataTable from "app/components/DataTable";
import useClientList from "app/hooks/clients/useClientList";
import { listColumnsData } from "base/data/mock/client/listColumnsData";
import { Container, Content, Header } from "./styles";

const Clients = () => {
  const { data, isError, isLoading, isSuccess, error, refetch, status } =
    useClientList();

  console.log(data);

  return (
    <Container>
      <Header>
        <h1>Clientes</h1>
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
            {status}: Infelizmente não foi possível resgatar os dados
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
