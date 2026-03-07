"use client";

export type Project = {
  name: string;
  description: string;
};

export default function ProjectGrid({
  projects,
  maxProjects,
  onChange,
}: {
  projects: Project[];
  maxProjects: number;
  onChange: (projects: Project[]) => void;
}) {
  const updateProject = (index: number, field: keyof Project, value: string) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addProject = () => {
    if (projects.length < maxProjects) {
      onChange([...projects, { name: "", description: "" }]);
    }
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3
          className="text-sm font-mono tracking-widest uppercase"
          style={{ color: "var(--astra-2000-40)" }}
        >
          Projects ({projects.length}/{maxProjects})
        </h3>
        {projects.length < maxProjects && (
          <button
            type="button"
            onClick={addProject}
            className="text-sm font-medium px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
            style={{
              background: "var(--astra-300)",
              color: "var(--astra-2000)",
            }}
          >
            + Add project
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-lg p-4 relative group"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
            }}
          >
            {projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(i)}
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "var(--astra-300)",
                  color: "var(--astra-2000-60)",
                }}
              >
                &times;
              </button>
            )}
            <input
              type="text"
              placeholder="Project name"
              value={project.name}
              onChange={(e) => updateProject(i, "name", e.target.value)}
              className="w-full text-sm font-medium mb-2 bg-transparent outline-none placeholder:opacity-40"
              style={{ color: "var(--astra-2000)" }}
            />
            <textarea
              placeholder="Brief description (1-2 sentences)"
              value={project.description}
              onChange={(e) => updateProject(i, "description", e.target.value)}
              rows={2}
              className="w-full text-sm bg-transparent outline-none resize-none placeholder:opacity-40"
              style={{ color: "var(--astra-2000-60)" }}
            />
          </div>
        ))}

        {projects.length < maxProjects && (
          <button
            type="button"
            onClick={addProject}
            className="rounded-lg p-4 flex items-center justify-center text-sm transition-colors hover:opacity-80 sm:flex hidden"
            style={{
              border: "1px dashed var(--astra-2000-15)",
              color: "var(--astra-2000-30)",
              minHeight: "6rem",
            }}
          >
            + Add project
          </button>
        )}
      </div>
    </div>
  );
}
