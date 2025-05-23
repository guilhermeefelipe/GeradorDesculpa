
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateExcuse } from "@/utils/excuseGenerator";
import { Sparkles, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface ExcuseFormProps {
  onExcuseGenerated: (excuse: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const ExcuseForm = ({ onExcuseGenerated, isLoading, setIsLoading }: ExcuseFormProps) => {
  const [problem, setProblem] = useState("");
  
  const WEBHOOK_URL = "https://guilhermeatanazio.app.n8n.cloud/webhook/665419e8-a242-452d-b631-0f9f5c125299";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setIsLoading(true);
    
    try {
      // Generate the excuse
      const excuse = generateExcuse(problem);
      
      // Call the webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // To avoid CORS issues
        body: JSON.stringify({
          problem: problem,
          excuse: excuse,
          timestamp: new Date().toISOString()
        }),
      });
      
      // Update the UI with the generated excuse
      onExcuseGenerated(excuse);
      
      // Notify the user that the webhook was triggered
      toast("Webhook acionado com sucesso!");
    } catch (error) {
      console.error("Error with webhook:", error);
      toast("Erro ao acionar webhook", {
        description: "Desculpa gerada, mas houve um erro ao enviar os dados.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
            Descreva seu problema
          </label>
          <Textarea
            id="problem"
            placeholder="Ex: Cheguei atrasado na reunião importante..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="bg-white/10 border-blue-400/30 text-white placeholder:text-gray-400 min-h-[100px] backdrop-blur-sm focus:border-blue-400 focus:ring-blue-400"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={!problem.trim() || isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Sparkles className="w-5 h-5 animate-spin" />
            <span>Gerando desculpa...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Gerar Desculpa</span>
          </>
        )}
      </Button>
    </form>
  );
};
