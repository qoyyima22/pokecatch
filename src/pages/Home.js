import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import styles from "./Home.css"
import Loading from "../components/Loading"

const Home = () => {
  const [ data, setData ] = useState({})
  const [ loading, setLoading ] = useState(true) 
  
  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
    .then(response => response.json())
    .then(data => data.code === 2200 && setData(data.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  },[])
  
  return (
    <Layout>
      {
        loading ? (<Loading />) : (
          <div className={styles.container}>
            Ini yaaaaaaaaa
          </div>
        )
      }
    </Layout>
  );
};

export default Home;