import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de ZenBonsai. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Gracias por tu mensaje. Un especialista se pondrá en contacto contigo pronto. Mientras tanto, puedes consultar nuestras guías de cuidado.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-zen-gradient text-primary-foreground shadow-zen-medium hover:shadow-zen-strong float-animation"
        size="icon"
      >
        💬
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-xl shadow-zen-strong overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-zen-gradient text-primary-foreground p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Soporte ZenBonsai</h3>
                <p className="text-sm opacity-90">¿En qué podemos ayudarte?</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 h-8 w-8"
              >
                ✕
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.isBot && (
                    <div className="font-medium text-xs mb-1">Asistente:</div>
                  )}
                  <div>{message.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button onClick={sendMessage} variant="zen" size="icon">
              ➤
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};