import React from 'react'
import { Minus2, X } from 'lucide-react'

const Header: React.FC = () => {
  const handleMinimize = () => {
    window.electron.minimizeWindow()
  }

  const handleClose = () => {
    window.electron.hideWindow()
  }

  return (
    <div className="h-12 bg-gray-900 flex items-center justify-between px-4 select-none drag-region">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <span className="text-white font-semibold text-sm">MacBot</span>
      </div>
      <div className="flex items-center gap-2 no-drag-region">
        <button
          onClick={handleMinimize}
          className="w-8 h-8 rounded-md hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <Minus2 size={14} />
        </button>
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-md hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}

export default Header
