import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box mt={5}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Mi Aplicación
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
