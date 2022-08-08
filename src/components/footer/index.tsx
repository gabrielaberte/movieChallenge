import React, { useState } from "react";
import { Dropdown, Layout } from "antd";
import { DivMenu } from "../header/styles";

const { Footer } = Layout;

export default function FooterBar() {
    return (
      <Layout>
      <Footer style={{backgroundColor: '#1E2F3F', color: 'inherit', padding: '2px'}}>
<h6 style={{color: 'inherit'}}>Created by Gabriela Berte using React</h6>
            </Footer>
            </Layout>
  );
}
