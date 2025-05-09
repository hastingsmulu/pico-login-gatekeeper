import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Circle } from "lucide-react";
import { LightbulbOff, Droplet, ThermometerSun, DoorClosed } from "lucide-react";

const Dashboard = () => {
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const CircleIndicator = ({ value, label, color, icon: Icon }: { value: number, label: string, color: string, icon: any }) => (
    <div className="relative flex flex-col items-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            strokeWidth="8"
            stroke="currentColor"
            fill="none"
            className={`${color} transition-all duration-500 ease-in-out`}
            strokeDasharray={`${value * 2.4} 240`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className={`w-6 h-6 ${color} mb-1`} />
          <span className={`text-lg font-bold ${color}`}>{value}{label}</span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
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

          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white/90 text-xl font-medium">Environment</CardTitle>
              <ThermometerSun className="w-6 h-6 text-white/40" />
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-center gap-6">
              <CircleIndicator 
                value={24} 
                label="°C" 
                color="text-red-400" 
                icon={ThermometerSun} 
              />
              <CircleIndicator 
                value={65} 
                label="%" 
                color="text-blue-400" 
                icon={Droplet} 
              />
            </CardContent>
          </Card>

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
