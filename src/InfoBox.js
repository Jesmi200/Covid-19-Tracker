import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({title, cases,total }) {
  return (
    <Card>
        <CardContent>
            {/*title*/}

            <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

             {/*120k cases*/}
            <h2 className='infoBox__cases'>{cases}</h2>
           
             {/*1.2m total*/}
            <Typography className='infoBox__total' color='textSecondary'>{total}</Typography>
            


        </CardContent>
      
    </Card>
  )
}

export default InfoBox
