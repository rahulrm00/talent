export function Checkbox({ checked, onChange, className = "" }) {
    return (
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`} 
      />
    );
  }
  