// components/ColorPicker.js
import { useState } from 'react';

const defaultColors = [
  "#1e40af", "#6d28d9", "#be123c", "#92400e", "#15803d", "#0f766e",
  "#2563eb", "#a21caf", "#dc2626", "#ea580c", "#ca8a04", "#0d9488",
  "#7c3aed", "#db2777", "#f97316", "#eab308", "#10b981", "#22d3ee",
  "#e879f9", "#f9a8d4", "#fb923c", "#fde68a", "#bbf7d0", "#99f6e4",
  "#000000", "#1f2937", "#374151", "#6b7280", "#d1d5db", "#ffffff"
];

export default function ColorPicker({ onSelectColor, onClose }:any) {
  const [customColor, setCustomColor] = useState('#000000');

  return (
    <div className="bg-[#202020] text-white px-3 py-4 rounded shadow-xl w-full">
      <div className="flex items-center justify-between py-5 px-4">
        <span>Choose Color</span>
        <button onClick={onClose} className='rounded py-1 px-3 bg-blue-700 text-blue-400'>Done</button>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-2 w-full">
        {defaultColors.map(color => (
          <div key={color} className="flex justify-center">
            <button
              className="w-8 h-8 rounded-full border"
              style={{ backgroundColor: color }}
              onClick={() => onSelectColor(color)}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center px-4 py-2 justify-between gap-2">
        <input
          type="color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          className="w-10 h-10 border rounded"
        />
        <button
          className="bg-blue-500 px-2 py-1 rounded"
          onClick={() => onSelectColor(customColor)}
        >
          Pick Custom
        </button>
      </div>
    </div>
  );
}
