
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { LightbulbOff, Droplet, ThermometerSun, DoorClosed } from "lucide-react";

const Dashboard = () => {
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      {/* Modern noise pattern overlay */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.15' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(150%) brightness(120%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white/90 mb-8">Pico W Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Light Control */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Light Control</CardTitle>
              <LightbulbOff className={`w-6 h-6 ${lightOn ? 'text-yellow-400' : 'text-white/40'}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={lightOn} 
                  onCheckedChange={setLightOn}
                  className="data-[state=checked]:bg-red-500"
                />
                <Label className="text-white/70">{lightOn ? 'On' : 'Off'}</Label>
              </div>
            </CardContent>
          </Card>

          {/* Water Pump */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Water Pump</CardTitle>
              <Droplet className={`w-6 h-6 ${pumpOn ? 'text-blue-400' : 'text-white/40'}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={pumpOn} 
                  onCheckedChange={setPumpOn}
                  className="data-[state=checked]:bg-red-500"
                />
                <Label className="text-white/70">{pumpOn ? 'Active' : 'Inactive'}</Label>
              </div>
            </CardContent>
          </Card>

          {/* Temperature & Humidity */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Environment</CardTitle>
              <ThermometerSun className="w-6 h-6 text-white/40" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-white/70">Temperature</Label>
                  <span className="text-white/90">24°C</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-white/70">Humidity</Label>
                  <span className="text-white/90">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Door Status */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Door Status</CardTitle>
              <DoorClosed className={`w-6 h-6 ${doorOpen ? 'text-red-400' : 'text-white/40'}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={doorOpen} 
                  onCheckedChange={setDoorOpen}
                  className="data-[state=checked]:bg-red-500"
                />
                <Label className="text-white/70">{doorOpen ? 'Open' : 'Closed'}</Label>
              </div>
            </CardContent>
          </Card>

          {/* Date & Time */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Date & Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-white/90">
                <p className="text-2xl font-mono">
                  {currentTime.toLocaleTimeString()}
                </p>
                <p className="text-white/70">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
