import React from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default function AlertSnackbar({open_alert, handleClose_alert, kind}) {
  return (
    <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open_alert}
        onClose={handleClose_alert}
        autoHideDuration={3000}
    >
      {
        kind[0]
        ? <Alert severity="success">이모지 생성 완료되었습니다!</Alert>
        : kind[1]
          ? <Alert severity="error">이모지 생성 실패하였습니다!</Alert>
          : null
      }
        
    </Snackbar>
  )
}
