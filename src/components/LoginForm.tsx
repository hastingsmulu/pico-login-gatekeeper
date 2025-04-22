
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CardTitle } from "@/components/ui/card";
import { LockKeyhole, Mail } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CardTitle className="text-2xl font-bold text-center text-white/90 mb-8">
        Pico W Dashboard
      </CardTitle>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/20 focus:ring-white/20"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-white/80">Password</Label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/20 focus:ring-white/20"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500" />
        <Label htmlFor="remember" className="text-sm font-normal text-white/70">
          Remember me
        </Label>
      </div>

      <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-medium">
        Sign In
      </Button>

      <p className="text-center text-sm text-white/50 mt-4">
        Connect to your Pico W device
      </p>
    </form>
  );
};

export default LoginForm;

