import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { ROUTES } from '@routes/routes';

import { Wrappper, Title, Notification } from './NotFound.styles';

export const NotFound: FC = () => {
  const [counter, setCounter] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (!counter) navigate(ROUTES.MAIN, { replace: true });

    timer = setTimeout(() => setCounter(counter - 1), 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [navigate, counter]);

  return (
    <Container maxWidth="xl">
      <Wrappper>
        <Title variant="h2">Sorry, this page does not exist</Title>
        <Notification variant="body1" color="primary">
          You will be redirected to home page in{' '}
          <Typography variant="h3" component="span" color="error">
            {counter}
          </Typography>{' '}
          seconds
        </Notification>
      </Wrappper>
    </Container>
  );
};
