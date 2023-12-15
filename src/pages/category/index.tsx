import { CategoryType } from '@/interface/categories.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogsService } from '@/services/blog.service'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = ({ categories }: CategoryPageProps) => {
    const router = useRouter()
    return (
        <SEO metaTitle='All Category'>
            <Layout>
                <Box height={{ xs: "30vh", md: "50vh" }} width={{ xs: "100%", md: "80%" }} m="10vh auto 0" sx={{ backgroundColor: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "8px", rowGap: "10px" }}>
                    <Typography variant='h3' fontFamily="fantasy">All categories</Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        {categories.map(item => (
                            <Button onClick={() => router.push(`/category/${item.slug}`)}>{item.label}</Button>
                        ))}
                    </ButtonGroup>
                </Box>
            </Layout>
        </SEO>
    )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
    const categories = await BlogsService.getCategories();

    return {
        props: {
            categories,
        },
    }
}

interface CategoryPageProps {
    categories: CategoryType[]
}