import { Sidebar } from "@/components";
import { calculateEstimatedTimeToRead } from "@/helper/time.format";
import { CategoryType } from "@/interface/categories.interface";
import { BlogsType } from "@/interface/interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogsService } from "@/services/blog.service";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const DetailedBlogsPage = ({ blog, latestBlogs, categories }: DetailedBlogsPageProps) => {
    const router = useRouter()

    return (
        <SEO metaTitle={`${router.query.slug}`}>
            <Layout>
                <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }} >
                    <Box width={{ xs: "100%", md: "70%" }}>

                        <Box sx={{ backgroundColor: "black", padding: "20px", borderRadius: "8px", boxShadow: "0 8px 16px rgba(255, 255, 255, 0.1)", }} position={"relative"} width={"100%"} height={{ xs: "30vh", md: "50vh" }}>
                            <Image fill src={blog.image.url} alt={blog.title} style={{ objectFit: "cover", borderRadius: "10px" }} />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px", mt: "20px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    mt: "20px",
                                }}
                            >
                                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                                <Box>
                                    <Typography>{blog.author.name}</Typography>
                                    <Box color={"grey"}>
                                        {format(new Date(blog.createdAt), "dd MMM yyyy")} &#x2022; {calculateEstimatedTimeToRead(blog.description.text)}min read
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="h4">{blog.title}</Typography>
                            <Typography color={"grey"} >{blog.excerpt}</Typography>
                            <Divider />
                            <div style={{ opacity: "0.5" }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
                        </Box>
                    </Box>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                </Box>
            </Layout>
        </SEO>
    );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({ query }) => {
    const blog = await BlogsService.getDetailedBlogs(query.slug as string);

    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blog,
            latestBlogs,
            categories
        },
    };
};

interface DetailedBlogsPageProps {
    blog: BlogsType;
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}
