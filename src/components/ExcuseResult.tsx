
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, RefreshCw } from "lucide-react";

interface ExcuseResultProps {
  excuse: string;
  isLoading: boolean;
}

export const ExcuseResult = ({ excuse, isLoading }: ExcuseResultProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!excuse) return;
    
    await navigator.clipboard.writeText(excuse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
          <h3 className="text-xl font-semibold text-white">Gerando sua desculpa...</h3>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-white/20 rounded w-full"></div>
          <div className="h-4 bg-white/20 rounded w-4/5"></div>
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!excuse) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
          <span className="text-2xl">💡</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Pronto para ajudar!</h3>
          <p className="text-gray-300">
            Descreva seu problema e deixe a magia acontecer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Sua Desculpa</h3>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="bg-white/10 border-blue-400/30 text-white hover:bg-white/20"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6">
        <p className="text-white leading-relaxed text-lg">
          "{excuse}"
        </p>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span>Desculpa gerada com sucesso!</span>
      </div>
    </div>
  );
};
