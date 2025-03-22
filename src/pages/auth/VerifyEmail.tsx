import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const VerifyEmail = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2>Verify Your Email</h2>
        <p>
          Enter the OTP sent to your email to complete the verification process
        </p>
      </div>
      <div className="grid gap-6">
        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
        <p className="text-center">
          Didn't Receive the OTP?{' '}
          <Button variant={'link'} size={'fit'} className="underline">
            Resend
          </Button>
        </p>
      </div>
    </form>
  );
};

export default VerifyEmail;
