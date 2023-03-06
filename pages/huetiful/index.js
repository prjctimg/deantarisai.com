import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Typography, Box, Paper, ImageList, ImageListItem, Stack } from '@mui/material'
import { gradients } from '@/data/color-maps/gradients.mjs'
import _ from 'lodash'



export default function Landing() {
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
                        <Stack className='max-w-fit' direction='row' spacing={2}  > {/* Make the gradient map an accordion components */}
                            <ImageList cols={{
                                xs: 2,
                                sm: 3


                            }} className='h-72 overflow-scroll space-x-1 sm:space-x-2 ' >
                                {_.map(gradients, (value) => (<ImageListItem component='div'>
                                    <Typography gutterBottom component='div' variant='caption'>
                                        {value.name}
                                        {/* Must attach onCLICK and hover events to show expanded metadata */}
                                        <Paper style={{ backgroundImage: `linear-gradient(${value.colors})` }} className='w-24 h-24 sm:w-32 sm:h-32' />
                                    </Typography>
                                </ImageListItem>))}
                            </ImageList>
                        </Stack>

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
