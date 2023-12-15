import { Content, Sidebar } from '@/components'
import { CategoryType } from '@/interface/categories.interface'
import { BlogsType } from '@/interface/interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogsService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const CategoryDeailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesPageProps) => {
    const router = useRouter()

    return (
        <SEO metaTitle={`${router.query.slug}-category`}>
            <Layout>
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
    )
}

export default CategoryDeailedPage

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
    const blogs = await BlogsService.getDeatailedCategoriesBlog(query.slug as string);

    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories
        },
    };
};

interface DetailedCategoriesPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}
