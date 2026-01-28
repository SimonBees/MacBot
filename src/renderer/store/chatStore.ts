import { create } from 'zustand'

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
}

interface ChatStore {
  messages: Message[]
  isLoading: boolean
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  clearMessages: () => void
  setLoading: (loading: boolean) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
      id: '1',
      role: 'assistant',
      content: '你好！我是 MacBot，你的 AI 助手。有什么我可以帮你的吗？',
      timestamp: Date.now(),
    },
  ],
  isLoading: false,
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: Date.now(),
        },
      ],
    })),
  clearMessages: () =>
    set({
      messages: [
        {
          id: '1',
          role: 'assistant',
          content: '你好！我是 MacBot，你的 AI 助手。有什么我可以帮你的吗？',
          timestamp: Date.now(),
        },
      ],
    }),
  setLoading: (loading) => set({ isLoading: loading }),
}))
