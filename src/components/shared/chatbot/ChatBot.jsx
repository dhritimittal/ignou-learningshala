"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getBotReply, isCounsellorIntent } from "@/data/chatbot/kb";
import CounsellingWizard from "@/components/shared/wizard/counsellingwizard";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BOT_NAME = "LearningShala Assistant";

const GREETING = {
  id: "greeting",
  from: "bot",
  text: "Hi there! 👋 I'm your **LearningShala assistant**.\n\nAsk me anything about IGNOU programmes, fees, admission, or exams — I'm here to help!",
  chips: ["Programmes & Fees", "Admission Process", "FAQs", "Talk to a Counsellor"],
};

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

// Converts simple markdown bold (**text**) to <strong> for display
function parseBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i}>{p}</strong> : p
  );
}

// ─── BubbleText: renders newlines + bold ──────────────────────────────────────

function BubbleText({ text }) {
  return (
    <span>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {parseBold(line)}
          {i < text.split("\n").length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

// ─── Message Bubble ──────────────────────────────────────────────────────────

function MessageBubble({ msg, onChip }) {
  const isBot = msg.from === "bot";

  return (
    <div className={`flex gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold mt-0.5">
          LS
        </div>
      )}
      <div className="flex flex-col gap-1.5 max-w-[82%]">
        <div
          className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isBot
              ? "bg-secondary text-foreground rounded-tl-sm"
              : "bg-primary text-white rounded-tr-sm"
          }`}
        >
          <BubbleText text={msg.text} />

          {/* Counsellor CTA inside fallback messages */}
          {msg.showCta && (
            <button
              onClick={msg.onCta}
              className="mt-2.5 w-full py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              Start Free Counselling →
            </button>
          )}
        </div>

        {/* Quick-reply chips */}
        {isBot && msg.chips && msg.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {msg.chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onChip(chip)}
                className="px-2.5 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all duration-150"
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Typing Indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex gap-2 justify-start">
      <div className="shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
        LS
      </div>
      <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground block"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Chat Panel ──────────────────────────────────────────────────────────────

function ChatPanel({ onClose, openWizard }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input on open
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  function addUserMessage(text) {
    const userMsg = { id: makeId(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    return text;
  }

  function addBotMessage(entry, extraProps = {}) {
    const botMsg = {
      id: makeId(),
      from: "bot",
      text: entry.answer,
      chips: entry.chips ?? [],
      ...extraProps,
    };
    setMessages((prev) => [...prev, botMsg]);
  }

  function handleChip(chip) {
    // Any chip that implies talking to a human → open wizard directly
    const counsellorChips = [
      "Talk to a Counsellor",
      "Start Counselling",
      "Talk to a counsellor",
      "Start counselling",
    ];
    if (counsellorChips.includes(chip)) {
      openWizard();
      return;
    }
    sendMessage(chip);
  }

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    // If the user is asking for a counsellor, open wizard immediately
    if (isCounsellorIntent(trimmed)) {
      addUserMessage(trimmed);
      setInput("");
      openWizard();
      return;
    }

    addUserMessage(trimmed);
    setInput("");
    setTyping(true);

    // Simulate bot thinking delay
    setTimeout(() => {
      setTyping(false);
      const entry = getBotReply(trimmed);
      const isFallback = entry.keywords?.[0] === "__fallback__";

      addBotMessage(entry, {
        showCta: isFallback,
        onCta: openWizard,
      });
    }, 800 + Math.random() * 400);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 12 }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className="fixed right-4 z-[200] w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-border bg-background flex flex-col"
      style={{ bottom: "96px", top: "max(72px, env(safe-area-inset-top, 72px))", maxHeight: "calc(100dvh - 72px - 96px)" }}
    >
      {/* Header — compact single row, close icon flush right */}
      <div className="bg-primary px-3.5 py-2.5 flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-xs shrink-0">
          LS
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-tight">{BOT_NAME}</p>
          <span className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            <span className="text-white/70 text-xs">Online · usually replies instantly</span>
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-hide min-h-0">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} onChip={handleChip} />
        ))}
        {typing && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="shrink-0 px-3 py-2 border-t border-border flex gap-2 items-center bg-background"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about programmes, fees…"
          className="flex-1 rounded-full border border-input bg-muted px-3.5 py-1.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send"
          className="w-8 h-8 rounded-full bg-primary hover:bg-primary-hover disabled:opacity-40 flex items-center justify-center text-white transition-colors shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M14.5 1.5L7 9M14.5 1.5l-5 13-2.5-5.5-5.5-2.5 13-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </motion.div>
  );
}

// ─── Chat Bubble Button ──────────────────────────────────────────────────────

function ChatBubble({ open, onClick, showDot }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={open ? "Close chat" : "Open chat"}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-[201] w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 flex items-center justify-center text-white transition-colors hover:bg-primary-hover"
    >
      {/* Pulse ring */}
      {!open && (
        <motion.span
          className="absolute inset-0 rounded-full bg-primary"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Unread dot */}
      {showDot && !open && (
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-white z-10" />
      )}

      <AnimatePresence mode="wait">
        {open ? (
          <motion.svg
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            width="22" height="22" viewBox="0 0 22 22" fill="none"
          >
            <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </motion.svg>
        ) : (
          <motion.svg
            key="chat"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            width="24" height="24" viewBox="0 0 24 24" fill="none"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="10.5" r="1" fill="currentColor"/>
            <circle cx="12" cy="10.5" r="1" fill="currentColor"/>
            <circle cx="15.5" cy="10.5" r="1" fill="currentColor"/>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Root ChatBot ─────────────────────────────────────────────────────────────

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);

  // Show unread dot after 12 s if user hasn't opened yet
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setShowDot(true);
    }, 12000);
    return () => clearTimeout(t);
  }, [open]);

  function handleOpen() {
    setOpen(true);
    setShowDot(false);
  }

  function openWizard() {
    setOpen(false); // collapse chat while wizard is open
    setWizardOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <ChatPanel
            onClose={() => setOpen(false)}
            openWizard={openWizard}
          />
        )}
      </AnimatePresence>

      <ChatBubble
        open={open}
        showDot={showDot}
        onClick={open ? () => setOpen(false) : handleOpen}
      />

      {wizardOpen && (
        <CounsellingWizard
          onClose={() => {
            setWizardOpen(false);
          }}
        />
      )}
    </>
  );
}
