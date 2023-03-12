import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Typography, Box, Paper, Grid, Stack, ImageListItemBar } from '@mui/material'
import { gradients } from '@/data/color-maps/gradients.mjs'
import _ from 'lodash'
import { useState } from 'react'



const PreviewComponent = ({ colors, clickHandler }) => {
    return (
        _.map(colors, value => <Paper onClick={clickHandler} style={{ background: value }} className='p-4 w-18 h-18 md:w-16 md:h-16' />)
    )
}

const GradientPreview = ({ colors, name, clickHandler }) => {
    return (<><Paper onClick={clickHandler} style={{ backgroundImage: `linear-gradient(${colors} )` }} className='pb-3 w-36 h-36 hover:translate-x-1 delay-75 duration-200 md:w-32 md:h-32' />
        <Typography marginTop={1} component='div' variant='caption'>
            {name}
        </Typography></>)
}




export default function Landing() {
    const [preview, setPreview] = useState(false)
    const [gradient, setGradient] = useState(true)

    const previewHandler = () => {
        setPreview(true)
    }

    const gradientHandler = () => {
        setPreview(false)
    }

    return (
        <>
            <PageSEO title={`Huetiful - ${siteMetadata.author}`} description={siteMetadata.description} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className=" text-3xl  leading-9 tracking-tight text-primary-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Huetiful

                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        Color utilities
                    </p>

                </div>
                <div className="container py-12">
                    <div className='p-4 bg-gray-100 w-full h-fit'>
                        <Typography component='div' gutterBottom variant='h5' className='font-extralight font-sans'>
                            Gradient generator
                            <Typography variant='body2' paddingTop={2}>Beautiful gradients from uigradients.</Typography>
                        </Typography>
                        {/* Make the gradient map an accordion components */}
                        <Grid container className='h-72 overflow-scroll' columnSpacing={{ xs: 3, sm: 3 }} rowSpacing={{ xs: 2, sm: 3 }}>
                            {_.map(gradients, (value) => (<Grid item component='div' xs={6} sm={4} md={3} >


                                {/* Must attach onCLICK and hover events to show expanded metadata */}
                                {preview ? <PreviewComponent clickHandler={() => setPreview(false)} colors={value.colors} /> : <GradientPreview colors={value.colors} name={value.name} clickHandler={() => setPreview(true)} />}

                            </Grid>))}
                        </Grid>


                    </div>
                    <div className="-m-4 flex flex-wrap">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
