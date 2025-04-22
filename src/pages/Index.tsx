
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative w-full max-w-md mx-auto p-6">
        {/* Circuit board pattern background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-.83zm5.657 0L13.857 8.485 15.272 9.9l7.9-7.9h-.485zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-.485zM3.515 0L0 3.515l1.414 1.414L4.93 0H3.515zM56.485 0L60 3.515 58.586 4.93 55.07 0h1.415zM12.97 0l2.828 2.828-1.414 1.414L11.556 1.414 12.97 0zm5.657 0l2.828 2.828-1.414 1.414L17.213 1.414 18.627 0zm5.657 0l2.828 2.828-1.414 1.414L22.87 1.414 24.284 0zm5.657 0l2.828 2.828-1.414 1.414L28.527 1.414 29.94 0zm5.657 0l2.828 2.828-1.414 1.414L34.184 1.414 35.598 0zm5.657 0l2.828 2.828-1.414 1.414L39.84 1.414 41.255 0zm5.657 0l2.828 2.828-1.414 1.414L45.498 1.414 46.912 0zm-5.657 5.657l2.828 2.828-1.414 1.414L39.84 7.07l1.414-1.414zm-5.657 0l2.828 2.828-1.414 1.414L34.184 7.07l1.414-1.414zm-5.657 0l2.828 2.828-1.414 1.414L28.527 7.07l1.414-1.414zm-5.657 0l2.828 2.828-1.414 1.414L22.87 7.07l1.414-1.414zm-5.657 0l2.828 2.828-1.414 1.414L17.213 7.07l1.414-1.414zm-5.657 0l2.828 2.828-1.414 1.414L11.556 7.07l1.414-1.414zM8.485 0L0 8.485l1.414 1.414L9.9 0H8.485zm-2.828 0L0 5.657l1.414 1.414L6.07 0H5.657zM54.627 5.657L60 0h-1.414L52.799 5.657l1.828 0zM32.97 0L42.627 9.657 44.04 8.242 34.384 0h-1.414zm5.657 0l9.657 9.657 1.414-1.414L40.04 0h-1.414zM39.313 0l8.485 8.485 1.414-1.414L40.727 0h-1.414zM0 0h60v60H0V0z' fill='%23202020' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Card with glassmorphism effect */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-200">
          {/* Move the logo ABOVE the login form */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 bg-red-600 rounded-2xl shadow-lg flex items-center justify-center p-6 mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='4' width='16' height='16' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='9' y='9' width='6' height='6'%3E%3C/rect%3E%3Cline x1='9' y1='1' x2='9' y2='4'%3E%3C/line%3E%3Cline x1='15' y1='1' x2='15' y2='4'%3E%3C/line%3E%3Cline x1='9' y1='20' x2='9' y2='23'%3E%3C/line%3E%3Cline x1='15' y1='20' x2='15' y2='23'%3E%3C/line%3E%3Cline x1='20' y1='9' x2='23' y2='9'%3E%3C/line%3E%3Cline x1='20' y1='14' x2='23' y2='14'%3E%3C/line%3E%3Cline x1='1' y1='9' x2='4' y2='9'%3E%3C/line%3E%3Cline x1='1' y1='14' x2='4' y2='14'%3E%3C/line%3E%3C/svg%3E"
                alt="Pico W"
                className="w-full h-full"
              />
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;

