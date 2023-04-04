import React from 'react'
import { Box } from '@mui/material'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box p="20px">
        <Header title="BAR CHART" subtitle="Simple Bar Chart"/>
        <Box height="75vh">
            <BarChart />
        </Box>
    </Box>
  )
}

export default index