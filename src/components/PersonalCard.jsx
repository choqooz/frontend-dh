import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blueGrey, red, yellow } from "@mui/material/colors";


function PersonalCard({ title, count, description }) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardContent color="warning">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total: {count}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color= "warning">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default PersonalCard;
