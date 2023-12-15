import { Content, Hero, Sidebar } from "@/components";
import { CategoryType } from "@/interface/categories.interface";
import { BlogsType } from "@/interface/interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";

const index = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
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
  );
};

export default index;
export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
