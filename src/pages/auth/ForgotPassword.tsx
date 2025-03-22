import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ForgotPassword = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2>Trouble Signing In?</h2>
        <p>
          Enter your email, and we'll send you an OTP to reset your password
        </p>
      </div>
      <div className="grid gap-6">
        <Input
          type="email"
          name="email"
          label="email"
          placeholder="m@example.com"
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ForgotPassword;
