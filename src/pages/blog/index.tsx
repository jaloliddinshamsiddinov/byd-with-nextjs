import { Content } from '@/components'
import { BlogsType } from '@/interface/interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogsService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'

const BlogPage = ({ blogs }: BlogPagaProp) => {
    return (
        <SEO metaTitle='All blogs'>
            <Layout>
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center"
                    }}
                >

                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
    )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<BlogPagaProp> = async () => {
    const blogs = await BlogsService.getAllBlogs();
    return {
        props: { blogs }
    }
}

interface BlogPagaProp {
    blogs: BlogsType[]
}