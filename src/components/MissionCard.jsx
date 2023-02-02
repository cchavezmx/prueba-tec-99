/* eslint-disable camelcase */

import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function MissionCard ({ mission_name, links, launch_site }) {
  const { mission_patch } = links
  const { site_name_long } = launch_site

  return (
    <>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography variant='h2'>{mission_name}</Typography>
      <Image src={mission_patch} width={100} height={100} alt="parche de la mission"/>
      <Typography variant='caption'>
        {site_name_long}
      </Typography>
    </Box>
    </>
  )
}
