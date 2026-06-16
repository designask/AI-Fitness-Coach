/**
 * Reusable form field that renders an input, select or textarea
 * based on `type`. Keeps the workout/meal forms DRY and consistent.
 *
 * For selects, pass an `options` array of strings.
 */
export default function FormField({
  id,
  label,
  type = "text",
  placeholder = "",
  options = [],
  hint,
  ...props
}) {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}

      {type === "select" ? (
        <select id={id} name={id} defaultValue="" {...props}>
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}

      {hint && <span className="mt-1 text-xs text-slate-500">{hint}</span>}
    </div>
  );
}
