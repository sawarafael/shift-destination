import { DataTable } from "./../../../components";
import { Container, Content, Header } from "./styles";

const Clients = () => {
  return (
    <Container>
      <Header>
        <h1>Clientes</h1>
      </Header>
      <Content>
        <DataTable
          data={[
            {
              id: 1,
              name: "Cliente 1",
              age: 10,
              gender: "M",
            },
            {
              id: 2,
              name: "Cliente 2",
              age: 20,
              gender: "F",
            },
          ]}
          columns={[
            {
              field: "name",
              headerName: "Nome",
            },
            {
              field: "age",
              headerName: "Idade",
            },
            {
              field: "gender",
              headerName: "Gênero",
            },
          ]}
        />
      </Content>
    </Container>
  );
};

export default Clients;
