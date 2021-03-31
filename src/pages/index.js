import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      Hello world!
      <Link to="/company/history">Contact</Link>
    </Layout>
  );
}
