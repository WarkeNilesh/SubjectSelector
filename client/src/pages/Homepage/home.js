import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../../components/MainFeaturedPost/mainfeaturedpost';
import FeaturedPost from '../../components/FeaturedPost/featuredpost';
import Homesidebar from "../../../src/components/sidebar/homesidebar";
import "./home.css"


const mainFeaturedPost = {
  title: 'Walchand college of engineering,Sangli',
  description:
    "Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli ? Miraj road.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Students',
    date: 'Nov 12',
    description:
      'Students Enrolled :- 450',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Courses',
    date: 'Nov 11',
    description:
      'No of course :- 10',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];




const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];




export default function Blog() {
  return (
    
      <div className="home">
      <Homesidebar />
      <Container maxWidth = "false" style={{marginTop:'100px'}}>
      <div className="newContainer">
       
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

        </div>
      </Container>
      </div>
    
  );
}

