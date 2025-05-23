
import { useState } from "react";
import { ExcuseForm } from "@/components/ExcuseForm";
import { ExcuseResult } from "@/components/ExcuseResult";

const Index = () => {
  const [currentExcuse, setCurrentExcuse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-white font-semibold text-lg">GERADOR DE DESCULPAS</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <a href="#" className="hover:text-white transition-colors">CATEGORIAS</a>
          <a href="#" className="hover:text-white transition-colors">SOBRE</a>
          <a href="#" className="hover:text-white transition-colors">CONTATO</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Gerador de
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Desculpas
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Precisa de uma desculpa criativa e convincente? 
                Nosso gerador inteligente cria a desculpa perfeita 
                para qualquer situação em segundos.
              </p>
            </div>

            <ExcuseForm 
              onExcuseGenerated={setCurrentExcuse}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
              <ExcuseResult excuse={currentExcuse} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
    </div>
  );
};

export default Index;
