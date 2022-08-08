import React, { useState } from "react";
import { Dropdown, Layout, Menu, Space, Input } from "antd";
import { DivMenu } from "./styles";
import { LoginOutlined, EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const { Search } = Input;

const { Header } = Layout;

function NavBar() {
  const [searchId, setSearchId] = useState<string>();

  let navigate = useNavigate();

  const menuFilmes = (
    <Menu
      items={[
        {
          key: "1",
          label: <a onClick={() => navigate("/")}>Populares</a>,
        },
        // {
        //   key: "2",
        //   label: (
        //     <a target="/" rel="/" href="/">
        //       Próximos Lançamentos
        //     </a>
        //   ),
        // },
      ]}
    />
  );

  const menuSeries = (
    <Menu
      items={[
        {
          key: "1",
          label: <a onClick={() => navigate("/")}>Populares</a>,
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
        // {
        //   key: "2",
        //   icon: <EditOutlined />,
        //   label: (
        //     <a target="/" rel="/" href="/">
        //       Configurações
        //     </a>
        //   ),
        // },
      ]}
    />
  );

  const onSearch = (value: string) => console.log(value);

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

              {/* <Dropdown overlay={menuSeries}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Séries</Space>
                </a>
              </Dropdown> */}
            </div>
            {/* <div>
              Descubra milhões de filmes!
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              
              <Search
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Procure por um Filme"
                onSearch={onSearch}
                style={{ width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              />
            </div> */}
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
