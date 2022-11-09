import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Home = () => {
    return ( 
    <div className="home">
<h1 className="plamh">Plan it all</h1>
<p>Planning is essential both personally and professionally. It helps us achieve our goals, and allows for more efficient use of time and other resources.

Planning means analyzing and studying the objectives, as well as the way in which we will achieve them. It is a method of action to decide what we are going to do and why. For that, we have to create a plan.Creating a plan:

Defines the need for resources to achieve objectives
Clarifies the activities and the doubts regarding the objectivesnp sought
Quantifies performance levels to be successful
Establishes priorities
Clarifies weaknesses and strengths to achieve objectives.</p>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        width="400"
        image={process.env.PUBLIC_URL + "/koby.jpg"} 
        alt="green iguana"
      />
      <CardContent
      height="200"
      >
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxheight: 200 , maxWidth:345 } } >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={process.env.PUBLIC_URL + "/Elonmask.jpg"} 
          alt="green iguana"
        />
        <CardContent height="200">
          <Typography gutterBottom variant=""h5 component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </div> );
}
 
export default Home;