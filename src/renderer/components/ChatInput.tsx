import React, { useState, KeyboardEvent } from 'react'
import { Send } from 'lucide-react'
import { useChatStore } from '../store/chatStore'

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('')
  const { addMessage, setLoading } = useChatStore()

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    addMessage({ role: 'user', content: input })
    setInput('')
    setLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      addMessage({
        role: 'assistant',
        content: `我收到了你的消息："${input}"。\n\n这是一个模拟回复。后续我会接入真实的 AI API 来提供智能回复。`,
      })
      setLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <div className="flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="输入消息... (Enter 发送, Shift+Enter 换行)"
          className="flex-1 min-h-[44px] max-h-32 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          rows={1}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
