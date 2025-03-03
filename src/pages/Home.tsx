import { Button } from '@/components/ui/button';
import WithTooltip from '@/components/with-tooltip/with-tooltip';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <WithTooltip text="Hello">
        <Button>Hello</Button>
      </WithTooltip>
    </div>
  );
};

export default Home;
