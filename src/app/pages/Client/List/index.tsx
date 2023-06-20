import DataTable from "app/components/DataTable";
import useClientList from "app/hooks/clients/useClientList";
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
        {isSuccess && (
          <DataTable
            columns={[
              {
                field: "id",
                name: "ID",
                flex: 1,
                value: ({ id }) => id,
              },
              {
                field: "numeroDocumento",
                name: "Nº. Documento",
                flex: 1,
                value: ({ numeroDocumento }) => numeroDocumento,
              },
              {
                field: "tipoDocumento",
                name: "Tipo do Documento",
                flex: 1,
                value: ({ tipoDocumento }) => tipoDocumento,
              },
              {
                field: "nome",
                name: "Nome",
                flex: 1,
                value: ({ name }) => name,
              },
              {
                field: "logradouro",
                name: "Logradouro",
                flex: 1,
                value: ({ logradouro }) => logradouro,
              },
              {
                field: "bairro",
                name: "Bairro",
                flex: 1,
                value: ({ bairro }) => bairro,
              },
              {
                field: "cidade",
                name: "Cidade",
                flex: 1,
                value: ({ cidade }) => cidade,
              },
              {
                field: "uf",
                name: "UF",
                flex: 1,
                value: ({ uf }) => uf,
              },
            ]}
            data={data ? data : []}
            rowId={(row) => row.id}
          />
        )}
      </Content>
    </Container>
  );
};

export default Clients;
