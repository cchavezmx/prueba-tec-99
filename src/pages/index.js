/* eslint-disable camelcase */
import Head from 'next/head'
import useGetData from '@/hooks/useGetdata'
import { Box, Typography } from '@mui/material'
import ListCards from '@/components/ListCards'
import LaunchesCard from '@/components/LaunchesCard'
import SelectorMission from '@/components/SelectorMission'
// api interna
// Cliente / Front
// Servidor / NODEJS

export default function Home () {
  const { data: launches, loading } = useGetData({ url: '/api/getData?limit=200' })
  // contato es el payload o la data que se va a pasar al componete LaunchesCard

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          '@media (min-width: 780px)': {
            width: '80%',
            flexDirection: 'row'
          }
        }}>
        <Box
          className='hidden'
          sx={{
            flexBasis: '40%',
            display: 'flex',
            border: '1px solid #eaeaea'
          }}>
            {/* list cards es el componente de vista principal para seleeccionar un vuelo */}
            { !loading && <ListCards launches={launches} />}
            { loading && <Typography variant="h4">Loading...</Typography>}
        </Box>
        {/* autoComplete de material UI */}
        <SelectorMission data={launches}/>
        {/* tarjeta donde se renderiza los vuelos */}
        <LaunchesCard />
        </Box>
        </main>
    </>
  )
}

// limit peso 8mb
// export async function getStaticProps () {
//   const data = await fetch('http://localhost:3000/api/getData?limit=100')
//     .then(res => res.json())
//     .then(json => json.launches)

//   return {
//     props: {
//       launches: data
//     }
//   }
// }
