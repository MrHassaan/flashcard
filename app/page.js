import Head from "next/head";
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Flashcards SaaS</Typography>
          <SignedOut>
            <Button color="inherit" href='/sign-in'>Login</Button>
            <Button color="inherit" href='/sign-up'>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2">Welcome to Flashcards</Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Get Started</Button>
      </Box>

      <Box sx={{ m: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply input your text and let our app do the rest.
              Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise
              flashcards that are easy to understand and remember.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 5, textAlign: 'center' }}>
        <Typography variant="h4" component="h2">
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h6">Starter Plan</Typography>
              <Typography variant="h6">$5 / month</Typography>
              <Typography>
                Simply input your text and let our app do the rest.
                Creating flashcards has never been easier.
              </Typography>
              <Button variant='contained' color="primary">
                choose basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h6">Premium Plan</Typography>
            <Typography variant="h6">$10 / month</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise
              flashcards that are easy to understand and remember.
            </Typography>
            <Button variant='contained' color="primary">
                choose Premium
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h6" gutterBottom>Enterprise Plan</Typography>
            <Typography variant="h6" gutterBottom>$20 / month</Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
            <Button variant='contained' color="primary" sx={{mt: 2}}>
                choose Enterprise
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
