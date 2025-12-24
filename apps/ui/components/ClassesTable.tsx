"use client"

import { useState } from "react"

type ClassType = "component" | "color" | "style" | "behavior" | "size" | "modifier"

interface ClassInfo {
  name: string
  type: ClassType
  description: string
}

interface ClassesTableProps {
  classes: ClassInfo[]
  componentName?: string
}

const typeConfig: Record<ClassType, { label: string; badgeClass: string; icon: React.ReactNode }> = {
  component: {
    label: "Component",
    badgeClass: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    icon: null,
  },
  color: {
    label: "Color",
    badgeClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
          <path d="m5 2 5 5" />
          <path d="M2 13h15" />
          <path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
        </g>
      </svg>
    ),
  },
  style: {
    label: "Style",
    badgeClass: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="size-3">
        <g fill="currentColor">
          <circle cx="13.5" cy="6" r="3.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <rect x="4.75" y="10.75" width="5.5" height="5.5" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.818,1.99L1.189,6.498c-.194,.333,.046,.752,.432,.752H6.879c.386,0,.626-.419,.432-.752L4.682,1.99c-.193-.331-.671-.331-.864,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    ),
  },
  behavior: {
    label: "Behavior",
    badgeClass: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </g>
      </svg>
    ),
  },
  size: {
    label: "Size",
    badgeClass: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125z" />
          <path d="M12 9h-2" />
          <path d="M12 6h-3" />
          <path d="M12 12h-3" />
          <path d="M12 18h-3" />
          <path d="M12 15h-2" />
          <path d="M21 3h-4" />
          <path d="M19 3v18" />
          <path d="M21 21h-4" />
        </g>
      </svg>
    ),
  },
  modifier: {
    label: "Modifier",
    badgeClass: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </g>
      </svg>
    ),
  },
}

export function ClassesTable({ classes, componentName = "" }: ClassesTableProps) {
  const [prefix, setPrefix] = useState("")

  const formatClassName = (name: string) => {
    return prefix ? `${prefix}-${name}` : name
  }

  return (
    <div className="not-prose my-6 overflow-x-auto">
      <div className="max-h-[400px] overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="border-b-0">
              <th className="bg-zinc-100 dark:bg-zinc-800 rounded-l-lg flex items-center gap-2 px-4 py-3 text-left font-medium">
                <div className="relative">
                  <input
                    className="w-20 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-2 py-1 text-xs font-normal placeholder:text-zinc-400"
                    name="prefix"
                    type="text"
                    placeholder="prefix–"
                    autoComplete="off"
                    minLength={0}
                    maxLength={12}
                    pattern="[a-z]*[a-z-]{0,11}"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                  />
                </div>
                <span>Class name</span>
              </th>
              <th className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 text-left font-medium">Type</th>
              <th className="bg-zinc-100 dark:bg-zinc-800 rounded-r-lg px-4 py-3 text-left font-medium"></th>
            </tr>
          </thead>
        <tbody>
          {classes.map((classInfo, index) => {
            const config = typeConfig[classInfo.type]
            return (
              <tr key={index} className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="w-3/12 px-4 py-3">
                  <code className="font-mono text-sm lowercase whitespace-nowrap">
                    {formatClassName(classInfo.name)}
                  </code>
                </td>
                <td className="w-2/12 px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ${config.badgeClass}`}
                  >
                    {config.icon}
                    {config.label}
                  </span>
                </td>
                <td className="w-7/12 min-w-[12rem] px-4 py-3 text-zinc-600 dark:text-zinc-400">
                  {classInfo.description}
                </td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    </div>
  )
}

// Pre-defined class sets for common components
export const buttonClasses: ClassInfo[] = [
  // Component
  { name: "btn", type: "component", description: "Button" },
  // Colors
  { name: "btn-neutral", type: "color", description: "neutral color" },
  { name: "btn-primary", type: "color", description: "primary color" },
  { name: "btn-secondary", type: "color", description: "secondary color" },
  { name: "btn-accent", type: "color", description: "accent color" },
  { name: "btn-info", type: "color", description: "info color" },
  { name: "btn-success", type: "color", description: "success color" },
  { name: "btn-warning", type: "color", description: "warning color" },
  { name: "btn-error", type: "color", description: "error color" },
  // Styles
  { name: "btn-outline", type: "style", description: "outline style" },
  { name: "btn-soft", type: "style", description: "soft style" },
  { name: "btn-text", type: "style", description: "text only style" },
  { name: "btn-gradient", type: "style", description: "gradient style" },
  { name: "btn-ghost", type: "style", description: "ghost style" },
  // Behavior
  { name: "btn-active", type: "behavior", description: "looks active" },
  { name: "btn-disabled", type: "behavior", description: "looks disabled" },
  // Sizes
  { name: "btn-xs", type: "size", description: "Extra small size" },
  { name: "btn-sm", type: "size", description: "Small size" },
  { name: "btn-md", type: "size", description: "Medium size (default)" },
  { name: "btn-lg", type: "size", description: "Large size" },
  { name: "btn-xl", type: "size", description: "Extra large size" },
  // Modifiers
  { name: "btn-wide", type: "modifier", description: "more horizontal padding" },
  { name: "btn-block", type: "modifier", description: "Full width" },
  { name: "btn-square", type: "modifier", description: "1:1 ratio" },
  { name: "btn-circle", type: "modifier", description: "1:1 ratio with rounded corners" },
]

export default ClassesTable

// Pre-configured table for Button component
export function ButtonClassesTable() {
  return <ClassesTable classes={buttonClasses} />
}
