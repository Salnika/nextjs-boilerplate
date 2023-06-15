import { NextPage } from "next";
import { fetchHelloWorld } from "../redux/actions/helloWorld";
import { useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import GitHubIcon from "@mui/icons-material/GitHub";
import NextJsIcon from "@mui/icons-material/Web";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.helloWorld);

  useEffect(() => {
    dispatch(fetchHelloWorld());
  }, [dispatch]);

  return (
    <Box padding={isMobile ? 2 : 4}>
      <Typography variant="h2">NextJS boilerplate</Typography>
      <Typography variant="subtitle1" gutterBottom>
        A simple NextJS boilerplate with preinstalled Redux and Axios. Edit 
        <span style={{ backgroundColor: "lightgray" }}>
          `src/pages/index.ts`
        </span>{" "}
        to get started.
      </Typography>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Button
          variant="outlined"
          startIcon={<NextJsIcon />}
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextJS Docs
        </Button>
        <Button
          variant="outlined"
          startIcon={<StoreMallDirectoryIcon />}
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit Docs
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/salnika/next-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </Button>
      </Box>
      {value && <Typography variant="subtitle2">Value</Typography>}
    </Box>
  );
};

export default Home;
