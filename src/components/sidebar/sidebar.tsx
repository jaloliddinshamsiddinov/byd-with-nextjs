import { navItems } from "@/config/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import { SidebarProps } from "./sidebar.props";
import { format } from "date-fns";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter()
  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box
        sx={{ position: "sticky", top: "100px", transition: "all .5s ease" }}
      >
        <Box
          sx={{
            border: "1px solid grey",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0  10px 16px rgba(0, 0, 0, 0.6)",
            mb: "20px",
          }}
        >
          <Typography variant="h5">Lets blog</Typography>
          <Box>
            {latestBlogs.map((item) => (
              <Box mt={"20px"} sx={{cursor:"pointer"}} key={item.title} onClick={()=> router.push(`/blog/${item.slug}`)}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body1">{item.title}</Typography>
                    {/* <Typography sx={{ opacity: ".4" }}>
                      {item.excerpt}
                    </Typography> */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        mt: "5px",
                      }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.avatar.url}
                      />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Box color={"grey"}>
                          {format(new Date(item.createdAt), "dd MMM yyyy")}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ mt: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0  10px 16px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Typography variant="h5">category</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: "20px" }}>
            {categories.map((nav) => (
              <Fragment key={nav.slug}>
                <Button onClick={()=> router.push(`/category/${nav.slug}`)} sx={{ justifyContent: "flex-start", height: "50px" }}>
                  {nav.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

const data = [
  {
    image:
      "https://www.hedinbil.se/-/media/Project/Hedin/Shops/HedinBilSite/vara-bilmarken/BYD/BYD_DE_Launch_Short_banner_website.jpg?h=1048&iar=0&w=3131&rev=92004c019ea940d4bbe881b7b8c91c31",
    title: "BYD Atto 3 Price - Images, Colours & Reviews - CarWale",
    exerpt: "BYD Atto 3 Price - Images, Colours",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
  {
    image:
      "https://www.maxxia.com.au/sites/default/files/styles/jumbotron_angle_nocrop/public/MMBanner_BYDAtto3.jpg?itok=9JkEtjo9",
    title: "BYD автомобилей на узбекском языке – Spot",
    exerpt: "BYD автомобилей на узбекском языке – Spot",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
  {
    image:
      "https://www.maxxia.com.au/sites/default/files/2023-09/BYD_LandingPage1_1920x700.jpg",
    title: "BYD Song Plus chega ao Brasil mais que o Compass 4Xe",
    exerpt: "BYD Song Plus chega ao Brasil",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
  {
    image:
      "https://image.cnbcfm.com/api/v1/image/107295493-1693834206759-BYD_Seal_cover_phot.jpg?v=1694160839",
    title: "BYD to start producing three models in Uzbekistan",
    exerpt: "BYD to start producing three models in Uzbekistan",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
];
