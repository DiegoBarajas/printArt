import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

const C = ({src, alt, title, description}) => {
    return (
        <Card className='card'>
            <CardContent>
                <CardMedia
                    component="img"
                    height="194"
                    image={src}
                    alt={alt}
                />
                <h5 style={{textAlign: 'center', padding: '10px'}}>{title}</h5>
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}

export default C