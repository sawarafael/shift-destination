export const listColumnsData = [
  {
    field: "id",
    name: "ID",
    flex: 1,
    value: ({ id }: any) => id,
  },
  {
    field: "numeroDocumento",
    name: "Nº. Documento",
    flex: 1,
    value: ({ numeroDocumento }: any) => numeroDocumento,
  },
  {
    field: "tipoDocumento",
    name: "Tipo do Documento",
    flex: 1,
    value: ({ tipoDocumento }: any) => tipoDocumento,
  },
  {
    field: "nome",
    name: "Nome",
    flex: 1,
    value: ({ nome }: any) => nome,
  },
  {
    field: "logradouro",
    name: "Logradouro",
    flex: 1,
    value: ({ logradouro }: any) => logradouro,
  },
  {
    field: "bairro",
    name: "Bairro",
    flex: 1,
    value: ({ bairro }: any) => bairro,
  },
  {
    field: "cidade",
    name: "Cidade",
    flex: 1,
    value: ({ cidade }: any) => cidade,
  },
  {
    field: "uf",
    name: "UF",
    flex: 1,
    value: ({ uf }: any) => uf,
  },
];
