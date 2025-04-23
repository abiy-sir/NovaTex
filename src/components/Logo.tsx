import React from 'react';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
        <Zap className="h-6 w-6 text-white" />
      </div>
      <div className="ml-2 font-bold text-xl">
        <span className="text-indigo-600">Nova</span>
        <span className="text-purple-600">Tex</span>
      </div>
    </div>
  );
};

export default Logo;