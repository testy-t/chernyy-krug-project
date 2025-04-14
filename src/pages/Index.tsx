
import BlackCircle from '@/components/BlackCircle';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex gap-8">
        <BlackCircle />
        <BlackCircle />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4 color-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600">Два черных круга</p>
      </div>
    </div>
  );
};

export default Index;
