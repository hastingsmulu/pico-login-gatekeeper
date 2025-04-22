
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Modern noise pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.15' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(150%) brightness(120%)'
        }}
      />
      
      <div className="relative w-full max-w-md p-8 space-y-8">
        {/* Logo Container */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-xl flex items-center justify-center p-5 transform transition-transform hover:scale-105">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='4' width='16' height='16' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='9' y='9' width='6' height='6'%3E%3C/rect%3E%3Cline x1='9' y1='1' x2='9' y2='4'%3E%3C/line%3E%3Cline x1='15' y1='1' x2='15' y2='4'%3E%3C/line%3E%3Cline x1='9' y1='20' x2='9' y2='23'%3E%3C/line%3E%3Cline x1='15' y1='20' x2='15' y2='23'%3E%3C/line%3E%3Cline x1='20' y1='9' x2='23' y2='9'%3E%3C/line%3E%3Cline x1='20' y1='14' x2='23' y2='14'%3E%3C/line%3E%3Cline x1='1' y1='9' x2='4' y2='9'%3E%3C/line%3E%3Cline x1='1' y1='14' x2='4' y2='14'%3E%3C/line%3E%3C/svg%3E"
              alt="Pico W"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Card Container */}
        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;

