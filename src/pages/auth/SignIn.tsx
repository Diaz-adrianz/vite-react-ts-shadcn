import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2>Welcome Back!</h2>
        <p>Enter your email and password to access your account</p>
      </div>
      <div className="grid gap-6">
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
          slotTop={
            <Link to="/auth/forgot-password" className="text-p">
              Forgot your password?
            </Link>
          }
          slotRight={
            <Button size={'icon'} variant={'secondary'}>
              <EyeIcon />
            </Button>
          }
        />

        <Button type="submit" className="w-full">
          Login
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
          Login with Google
        </Button>
      </div>
      <p className="text-center">
        Don't have an account?{' '}
        <Link to="/auth/sign-up" className="underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
