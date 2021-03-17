import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import Ants from '../components/Ants'


// pages/index.js

const Index = (props) => {
  console.log('props', props)
  return (
    <>
      {/* <Head>
        <title>Ants</title>
      </Head> */}
      <p>{props.message}</p>
      </>
      )
    }

export const getIntialProps = async () => {
      return {
        props:{
          message: "This is the message"
        }
      }
  }

  export default Index;

