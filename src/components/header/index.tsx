import React from "react";
import { Dropdown, Layout, Menu, Space } from "antd";
import { DivMenu } from "./styles";
import { LoginOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const { Header } = Layout;

function NavBar() {
  let navigate = useNavigate();
  const menuFilmes = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a onClick={() => navigate("/")}>
              Populares
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="/" rel="/" href="/">
              Próximos Lançamentos
            </a>
          ),
        },
      ]}
    />
  );

  const menuSeries = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a onClick={() => navigate("/")}>
              Populares
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="/" rel="/" href="/">
              Mais bem avaliadas
            </a>
          ),
        },
      ]}
    />
  );

  const menuPerfil = (
    <Menu
      items={[
        {
          key: "1",
          icon: <LoginOutlined />,
          label: <a onClick={() => navigate("/")}>Perfil</a>,
        },
        {
          key: "2",
          icon: <EditOutlined />,
          label: (
            <a target="/" rel="/" href="/">
              Configurações
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <Layout>
        <Header>
          <DivMenu>
            <div>
              <Dropdown overlay={menuFilmes}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Filmes</Space>
                </a>
              </Dropdown>

              <Dropdown overlay={menuSeries}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Séries</Space>
                </a>
              </Dropdown>
            </div>
            <div>
              <Dropdown overlay={menuPerfil}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <LoginOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </DivMenu>
        </Header>
      </Layout>
    </>
  );
}
export default NavBar;
