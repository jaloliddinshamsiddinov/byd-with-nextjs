import Carousel from "react-multi-carousel";
import { Avatar, Box, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";
import { calculateEstimatedTimeToRead } from "@/helper/time.format";
import { useRouter } from "next/router";

const Hero = ({ blogs }: HeroProps) => {
  const router = useRouter()
  return (
    <Box width={"100%"} height={"70vh"}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Box key={item.id} onClick={()=> router.push(`/blog/${item.slug}`)}sx={{cursor:"pointer"}}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              />
              <Box
                width={{ xs: "100%", md: "70%" }}
                sx={{
                  position: "relative",
                  color: "white",
                  top: "50%",
                  transform: "translateY(-50%)",
                  paddingLeft: { xs: "10px", md: "50px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "18px", md: "25px" }, color: "grey" }}
                >
                  {item.excerpr}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mt: "20px",
                  }}
                >
                  <Avatar alt={item.author.name} src={item.author.avatar.url} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>
                      {format(new Date(item.createdAt), "dd MMM yyyy")} &#x2022; {calculateEstimatedTimeToRead(item.description.text)}min
                      read
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;

const data = [
  {
    image:
      "https://www.hedinbil.se/-/media/Project/Hedin/Shops/HedinBilSite/vara-bilmarken/BYD/BYD_DE_Launch_Short_banner_website.jpg?h=1048&iar=0&w=3131&rev=92004c019ea940d4bbe881b7b8c91c31",
    title: "BYD Atto 3 Price - Images, Colours & Reviews - CarWale",
    exerpt: "BYD Atto 3 Price - Images, Colours & Reviews - CarWale",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
  {
    image:
      "https://www.maxxia.com.au/sites/default/files/styles/jumbotron_angle_nocrop/public/MMBanner_BYDAtto3.jpg?itok=9JkEtjo9",
    title:
      "BYD представил обновлённый интерфейс автомобилей на узбекском языке – Spot",
    exerpt:
      "BYD представил обновлённый интерфейс автомобилей на узбекском языке – Spot",
    author: {
      name: "Jaloliddin Shamsiddinov",
      image: "https://galleriya.netlify.app/image/taj.JPG",
    },
  },
  {
    image:
      "https://www.maxxia.com.au/sites/default/files/2023-09/BYD_LandingPage1_1920x700.jpg",
    title: "BYD Song Plus chega ao Brasil mais barato que o Compass 4Xe",
    exerpt: "BYD Song Plus chega ao Brasil mais barato que o Compass 4Xe",
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
