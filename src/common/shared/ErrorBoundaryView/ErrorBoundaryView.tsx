import { Backdrop, Button, Typography, Portal } from '@mui/material';
import { Reply } from '@mui/icons-material';

const ErrorBoundaryView = (): JSX.Element => {
  const handleResetError = () => {
    window.location.href = '/';
  };

  return (
    <Portal>
      <Backdrop open>
        <Typography gutterBottom variant="h4">
          <strong>Something went wrong...</strong>
        </Typography>

        <Typography variant="h5">
          Please contact your system administrator.
        </Typography>

        <Button
          variant="outlined"
          startIcon={<Reply />}
          onClick={handleResetError}
        >
          Back to Main Page
        </Button>
      </Backdrop>
    </Portal>
  );
};

export default ErrorBoundaryView;
