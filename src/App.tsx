import { useState, useEffect } from "react";
import { extensionsData, type Extension, type FilterType } from "./Data/Extensions";
import Header from "./Components/Header";
import FilterTabs from "./Components/FilterTabs";
import ExtensionCard from "./Components/ExtensionCard";

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);
  const [filter, setFilter] = useState<FilterType>("all");
  const [isDark, setIsDark] = useState(true); // Default to dark mode to match desktop specs

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleActive = (id: string) => {
    setExtensions((prev) => prev.map((ext) => (ext.id === id ? { ...ext, isActive: !ext.isActive } : ext)));
  };

  const removeExtension = (id: string) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Header isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

        <div className="flex flex-col items-start gap-4 mt-10 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-[hsl(227,75%,14%)] dark:text-[hsl(200,60%,99%)]">Extensions List</h1>
          <FilterTabs current={filter} onChange={setFilter} />
        </div>

        {filteredExtensions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExtensions.map((ext) => (
              <ExtensionCard key={ext.id} extension={ext} onToggle={toggleActive} onRemove={removeExtension} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)] rounded-2xl border border-dashed border-[hsl(0,0%,78%)] dark:border-[hsl(225,23%,24%)]">
            <p className="text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,78%)] text-lg">
              No extensions found under <span className="font-semibold">{filter}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
