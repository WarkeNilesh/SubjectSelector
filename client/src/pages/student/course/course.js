import "./course.css"
import Sidebar from "../../../components/sidebar/Sidebar";
import Grid from '@mui/material/Grid';
import FeaturedPost from '../../../components/FeaturedPost/featuredpost';


const featuredPosts = [
    {
        title: 'Courses',
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
    {
        title: 'Courses',
        date: 'Nov 11',
        description:
            'No of course :- 10',
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


const New = (props) => {
    const { role } = props;


    return (
        <div className="course">
            <Sidebar role={role} />


            <div className="newContainer" >

                <div className="topplace" >
                    <div ><h1 >COURSE</h1></div>
                </div>
            


            <div className="topbar">
                <div className="role"><h1>Ongoing Courses</h1></div>

                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} button="Enroll..." />
                    ))}
                </Grid>
            </div>
            <div className="topbar" >
                <div className="role"><h1>Your Courses</h1></div>

                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} button="REMOVE" />
                    ))}
                </Grid>
            </div>

            </div>

        </div>
    );
};

export default New;
