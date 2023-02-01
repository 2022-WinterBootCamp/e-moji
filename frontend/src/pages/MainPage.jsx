import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Pagination,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getAccess } from "../auth/tokenManager";
import { ReduxModule } from "../auth/ReduxModule";

import AllEmoji from "../components/mainpage/AllEmoji";
import MainToolbar from "../components/mainpage/MainToolbar";

const theme = createTheme();

export default function MainPage() {
  const what = getAccess();
  const userIdtoRedux = ReduxModule().decodeInfo?.id;

  // MainPage
  const [emojiData, setEmojiData] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const [emojiCount, setEmojiCount] = useState(1);
  let count;

  // 메인페이지 모든 이모지 API
  function getMainData(value) {
    try {
      fetch(`http://localhost:8080/api/v1/emojis/pages/${value}`, {
        method: "GET",
      })
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          setEmojiData(data);
          console.log("data>>> ", data);

          let n = data[0].id;
          if (value === 1) {
            if (n % 8 === 0) {
              count = n / 8;
            } else {
              count = n / 8 + 1;
            }
            setEmojiCount(parseInt(count)); // pagination 개수 설정
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMainData(1);
  }, []);

  // pagination
  const pageChange = (event, value) => {
    getMainData(value);
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8, mt: -6 }}>
        <MainToolbar/>

        <AllEmoji emojiData={emojiData}/>

        <Box>
          <Stack spacing={2}>
            <Pagination
              style={{ margin: "auto", marginTop: 20 }}
              count={emojiCount}
              page={page}
              onChange={pageChange}
            />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
