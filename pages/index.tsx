import { Button, Typography } from 'antd';

const Home = () => {
  const { Title } = Typography;
  return (
    <>
      <Typography>
        <Title>Home</Title>
      </Typography>
      <Button type='primary' danger>
        Button
      </Button>
    </>
  );
};

export default Home;
