// Live Chat Widget (View Layer)

import { useMemo, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type ChatRole = 'carrier' | 'shipper';
type ChatMessage = { id: string; sender: 'agent' | 'user'; text: string };

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  sender: 'agent',
  text: 'Thanks for reaching out! How can we help you today?',
};

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '' as ChatRole | '',
  });

  const handlePhoneChange = (value?: string) => {
    const digits = (value || '').replace(/\D/g, '');
    setFormData((prev) => {
      const prevDigits = (prev.phone || '').replace(/\D/g, '');
      if (digits.length > 15 && prevDigits.length >= 15) {
        return prev;
      }
      const limited = digits.slice(0, 15);
      return {
        ...prev,
        phone: limited ? `+${limited}` : '',
      };
    });
  };

  const isFormValid = useMemo(() => {
    return formData.name.trim() && formData.phone.trim() && formData.email.trim() && formData.role;
  }, [formData.name, formData.phone, formData.email, formData.role]);

  const handleStartChat = () => {
    if (!isFormValid) return;
    setHasStarted(true);
  };

  const handleSendMessage = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}`, sender: 'user', text: trimmed },
    ]);
    setChatInput('');
  };

  return (
    <>
      <style>{`
        @keyframes pointDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-point-down {
          animation: pointDown 1.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
        {isOpen && (
          <div className="w-[280px] sm:w-[320px] bg-white shadow-2xl border border-slate-200 rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Live Chat</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white"
                aria-label="Close chat"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>

            {!hasStarted ? (
              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-600">
                  Please share a few details before connecting to an agent.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Phone</label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="phone-input-custom text-xs"
                  />
                  <input type="hidden" name="phone" value={formData.phone || ''} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    I am a
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['carrier', 'shipper'] as ChatRole[]).map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData({ ...formData, role })}
                        className={`px-3 py-2 text-[11px] font-semibold border transition-colors ${
                          formData.role === role
                            ? 'bg-theme-primary text-white border-theme-primary'
                            : 'border-slate-300 text-slate-700 hover:border-theme-primary'
                        }`}
                      >
                        {role === 'carrier' ? 'Carrier' : 'Shipper'}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleStartChat}
                  disabled={!isFormValid}
                  className="w-full px-4 py-2 text-xs font-semibold rounded bg-theme-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-theme-dark transition-colors"
                >
                  Start chat
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-[320px]">
                <div className="px-4 py-3 text-[11px] text-slate-500 border-b border-slate-100">
                  Chatting as {formData.name} • {formData.role === 'carrier' ? 'Carrier' : 'Shipper'}
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded text-xs leading-relaxed ${
                          message.sender === 'user'
                            ? 'bg-theme-primary text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 px-3 py-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 text-[11px] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="px-3 py-2 text-[11px] font-semibold bg-theme-primary text-white hover:bg-theme-dark transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-theme-primary text-white shadow-xl hover:bg-theme-dark transition-colors flex-shrink-0"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <i className={`${isOpen ? 'ri-message-3-fill' : 'ri-message-3-line'} text-md`}></i>
        </button>
      </div>
    </>
  );
};
