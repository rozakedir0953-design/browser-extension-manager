import type { FilterType } from "../Data/Extensions";

interface FilterTabsProps {
  current: FilterType;
  onChange: (filter: FilterType) => void;
}

const tabs: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

function FilterTabs({ current, onChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-5 py-2 rounded-full font-medium text-sm border transition-colors ${
            current === tab.value
              ? "bg-[hsl(3,71%,56%)] text-white border-[hsl(3,71%,56%)]"
              : "bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)] text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,93%)] border-[hsl(0,0%,78%)] dark:border-[hsl(225,23%,24%)] hover:border-[hsl(3,86%,64%)]"
          }`}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
