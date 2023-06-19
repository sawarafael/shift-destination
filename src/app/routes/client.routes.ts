import { ComponentType } from "react";
import { EditClient, ListClient, NewClient, RemoveClient } from "../pages";

interface IClientRoutes {
  path: string;
  component: ComponentType;
}

const ClientRoutes: IClientRoutes[] = [
  {
    path: "/clients",
    component: ListClient,
  },
  {
    path: "/clients/new",
    component: NewClient,
  },
  {
    path: "/clients/edit/:id",
    component: EditClient,
  },
  {
    path: "/clients/remove/:id",
    component: RemoveClient,
  },
  {
    path: "/clients/:id",
    component: ListClient,
  },
];

export default ClientRoutes;
