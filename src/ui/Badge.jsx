export default function Badge({ children, className = "", bordered = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${bordered ? "border" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
