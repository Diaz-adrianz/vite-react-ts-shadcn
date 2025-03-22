import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2>Get Started!</h2>
        <p>Fill in your details to set up your account.</p>
      </div>
      <div className="grid gap-6">
        <Input name="username" label="username" placeholder="mycoolusername" />

        <Input
          type="email"
          name="email"
          label="email"
          placeholder="m@example.com"
        />

        <Input
          type="password"
          name="password"
          label="password"
          slotRight={
            <Button size={'icon'} variant={'secondary'}>
              <EyeIcon />
            </Button>
          }
        />

        <Input
          type="password"
          name="confirm_password"
          label="confirm password"
          slotRight={
            <Button size={'icon'} variant={'secondary'}>
              <EyeIcon />
            </Button>
          }
        />

        <Button type="submit" className="w-full">
          Sign up
        </Button>

        <div className="flex items-center gap-2">
          <div className="grow border-t"></div>
          <small>Or continue with</small>
          <div className="grow border-t"></div>
        </div>

        <Button variant="outline" className="w-full">
          <img
            className="size-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
          />
          Sign up with Google
        </Button>
      </div>
      <p className="text-center">
        Already have an account?{' '}
        <Link to="/auth/sign-in" className="underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
