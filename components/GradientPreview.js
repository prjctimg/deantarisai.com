import { Typography, Paper, Grid, Stack } from '@mui/material'
import _ from 'lodash'
import { useState } from 'react'
import ClipboardCopy from './CopyToClipboard'

// This is the component displayed when we click on the GradientPreview component
const ColorsPreview = ({ colors, clickHandler }) => {
    return ((<>
        <Stack className='flex w-full' direction='row' spacing={1}>
            {_.map(colors, value => <Paper
                onClick={clickHandler}
                style={{ background: value }}
                className='p-4 h-18 ' />
            )}

        </Stack>
    </>))
}

const GradientView = ({ colors, name, clickHandler }) => {
    return (<><Paper onClick={clickHandler} style={{ backgroundImage: `linear-gradient(${colors} )` }} className='pb-3 w-36 h-36 hover:translate-x-1 delay-75 duration-200 md:w-32 md:h-32' />
        <Typography marginTop={1} component='div' variant='caption'>
            {name}
        </Typography></>)
}

export const GradientPreview = ({ value }) => {
    const [click, setClick] = useState(false)



    return (
        <Grid item component='div' xs={6} sm={4} md={3} >


            {/* Must attach onCLICK and hover events to show expanded metadata */}
            {click ? <ColorsPreview colors={value.colors} clickHandler={() => setClick(false)} /> : <GradientView colors={value.colors} name={value.name} clickHandler={() => setClick(true)} />}

        </Grid>
    )
}

export default GradientPreview