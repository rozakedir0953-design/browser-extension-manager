import type { Extension } from "../Data/Extensions";

interface ExtensionCardProps {
  extension: Extension;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

function ExtensionCard({ extension, onToggle, onRemove }: ExtensionCardProps) {
  const { id, logo, name, description, isActive } = extension;

  return (
    <div className="flex flex-col justify-between bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)] rounded-2xl p-5 shadow-sm min-h-52.5 border border-transparent dark:border-[hsl(225,23%,24%)] transition-shadow hover:shadow-md">
      <div className="flex gap-4">
        <img src={logo} alt={`${name} logo`} className="w-12 h-12 rounded-lg shrink-0 object-contain" />
        <div>
          <h3 className="font-bold text-[hsl(227,75%,14%)] dark:text-white mb-1">{name}</h3>
          <p className="text-sm text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,78%)] leading-snug">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          onClick={() => onRemove(id)}
          className="px-4 py-1.5 rounded-full border border-[hsl(0,0%,78%)] dark:border-[hsl(226,11%,37%)] text-sm font-medium text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,93%)] hover:bg-[hsl(3,71%,56%)] hover:border-[hsl(3,71%,56%)] hover:text-white dark:hover:bg-[hsl(3,71%,56%)] dark:hover:border-[hsl(3,71%,56%)] dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(3,71%,56%)] transition-colors cursor-pointer"
        >
          Remove
        </button>

        <button
          type="button"
          onClick={() => onToggle(id)}
          role="switch"
          aria-checked={isActive}
          aria-label={`Toggle ${name}`}
          className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(3,71%,56%)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[hsl(226,25%,17%)] ${
            isActive
              ? "bg-[hsl(3,71%,56%)] hover:bg-[hsl(3,86%,64%)]"
              : "bg-[hsl(0,0%,78%)] dark:bg-[hsl(225,23%,24%)] hover:bg-[hsl(226,11%,37%)] dark:hover:bg-[hsl(226,11%,37%)]"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
              isActive ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default ExtensionCard;