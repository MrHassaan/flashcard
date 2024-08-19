import Head from "next/head";
import { Container, AppBar, Toolbar, Typography, Button,Box } from "@mui/material";
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
          <Typography variant="h6" style={{flexGrow:1}}>Flashcards SaaS</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      <Box 
        sx={{
        textAlign:'center',
        my:4,
       }} 
      >
        <Typography variant="h2">Welcome to flashcard</Typography>
        <Typography variant="h5">
          {''}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant='contained' colors="primary" sx={{mt: 5}}>Get Started</Button>
      </Box>
      <Box sx={{m:6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
      </Box>
    </Container>
  );
}
