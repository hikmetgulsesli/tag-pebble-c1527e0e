// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Tag Pebble
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, ChevronDown, CircleAlert, CircleHelp, Code, Pencil, Plus, Save, Settings, SlidersHorizontal } from "lucide-react";


export type RecordEditorTagPebbleActionId = "create-record-1" | "new-record-2" | "cancel-3" | "save-record-4" | "format-json-5" | "discard-changes-6" | "save-record-7" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "help-5";

export interface RecordEditorTagPebbleProps {
  actions?: Partial<Record<RecordEditorTagPebbleActionId, () => void>>;

}

export function RecordEditorTagPebble({ actions }: RecordEditorTagPebbleProps) {
  return (
    <>
      {/* TopAppBar for Mobile */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex items-center justify-between px-container-padding h-row-height-md w-full">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">Tag Pebble</span>
      <button className="h-[28px] px-3 bg-primary text-on-primary font-label-md text-label-md rounded shadow-sm flex items-center gap-1 active:opacity-80 transition-opacity" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      </div>
      </nav>
      {/* SideNavBar for Desktop */}
      <aside className="hidden md:flex flex-col p-gutter gap-unit w-64 h-full bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 z-40">
      <div className="px-3 py-4 flex flex-col gap-1 mb-4">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">Tag Pebble</span>
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Management Console</span>
      </div>
      <button className="w-full h-row-height-sm bg-primary text-on-primary rounded font-label-md text-label-md shadow-sm mb-4 flex items-center justify-center gap-2 active:scale-95 transition-transform" type="button" data-action-id="new-record-2" onClick={actions?.["new-record-2"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 h-row-height-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-md text-label-md" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 0"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-3 px-3 h-row-height-sm bg-secondary-container text-on-secondary-container font-bold rounded-lg transition-colors text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-3 px-3 h-row-height-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 0"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-2 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 h-row-height-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 h-row-height-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-md text-label-md" href="#" data-action-id="help-5" onClick={(event) => { event.preventDefault(); actions?.["help-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pt-row-height-md md:pt-0 h-full overflow-y-auto bg-surface flex flex-col">
      {/* Header */}
      <header className="bg-surface-container-lowest border-b border-outline-variant px-container-padding py-4 sticky top-0 z-30 flex items-center justify-between">
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface">Record Editor</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                          Unsaved changes
                      </p>
      </div>
      <div className="flex items-center gap-3">
      <button className="h-[36px] px-4 bg-surface-container-lowest text-secondary border border-outline-variant hover:bg-surface-container-low rounded font-label-md text-label-md transition-colors active:bg-surface-variant" type="button" data-action-id="cancel-3" onClick={actions?.["cancel-3"]}>
                          Cancel
                      </button>
      <button className="h-[36px] px-4 bg-primary text-on-primary rounded font-label-md text-label-md shadow-sm flex items-center gap-2 hover:bg-primary-container transition-colors active:opacity-90" type="button" data-action-id="save-record-4" onClick={actions?.["save-record-4"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Record
                      </button>
      </div>
      </header>
      {/* Form Container */}
      <div className="flex-1 p-container-padding max-w-4xl w-full mx-auto">
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col gap-6">
      {/* Form Section: Basic Details */}
      <div>
      <h2 className="font-label-md text-label-md font-semibold text-primary uppercase tracking-wide mb-4 pb-2 border-b border-outline-variant">Basic Details</h2>
      <div className="grid grid-cols-1 gap-6">
      {/* Tag Name Field (Required, showing validation error) */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1 flex items-center gap-1" htmlFor="tag_name">
                                          Tag Name <span className="text-error">*</span>
      </label>
      <input className="w-full h-row-height-md bg-surface-bright border-error text-on-surface rounded px-3 font-mono-label text-mono-label focus:ring-1 focus:ring-error focus:border-error transition-colors shadow-sm" id="tag_name" name="tag_name" placeholder="e.g. USER_AUTH_SUCCESS" type="text" defaultValue="" />
      <p className="mt-1.5 font-label-xs text-label-xs text-error flex items-center gap-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                          Tag Name is required.
                                      </p>
      </div>
      {/* Description Field (Optional) */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="description">
                                          Description
                                      </label>
      <textarea className="w-full bg-surface-bright border-outline-variant text-on-surface rounded px-3 py-2 font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors shadow-sm" id="description" name="description" placeholder="Provide a detailed description of what this tag represents..." rows={3}></textarea>
      </div>
      {/* Category / Domain */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="category">
                                              Category
                                          </label>
      <div className="relative">
      <select className="w-full h-row-height-md bg-surface-bright border-outline-variant text-on-surface rounded px-3 appearance-none font-body-sm text-body-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors shadow-sm pr-8" id="category" name="category">
      <option value="">Select a category...</option>
      <option value="auth">Authentication</option>
      <option selected={true} value="sys">System Metrics</option>
      <option value="ui">UI Interaction</option>
      <option value="api">API Call</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <ChevronDown className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="priority">
                                              Priority Level
                                          </label>
      <div className="relative">
      <select className="w-full h-row-height-md bg-surface-bright border-outline-variant text-on-surface rounded px-3 appearance-none font-body-sm text-body-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors shadow-sm pr-8" id="priority" name="priority">
      <option value="low">Low - Analytics only</option>
      <option selected={true} value="medium">Medium - Standard reporting</option>
      <option value="high">High - Alert triggering</option>
      <option value="critical">Critical - System halt</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <ChevronDown className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Form Section: Metadata & Configuration */}
      <div className="mt-4">
      <h2 className="font-label-md text-label-md font-semibold text-primary uppercase tracking-wide mb-4 pb-2 border-b border-outline-variant">Metadata Configuration</h2>
      <div className="space-y-4">
      {/* Toggle switch */}
      <div className="flex items-center justify-between p-3 rounded bg-surface-container-low border border-outline-variant border-opacity-50">
      <div>
      <h3 className="font-body-sm text-body-sm font-medium text-on-surface">Enable Real-time Sync</h3>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">Stream this record's events immediately to the analytics warehouse.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/* Payload Schema Definition */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">
                                          Expected Payload Schema (JSON)
                                      </label>
      <div className="relative">
      <textarea className="w-full bg-[#1e293b] text-[#e2e8f0] border-outline-variant rounded px-4 py-3 font-mono-label text-mono-label focus:ring-1 focus:ring-primary focus:border-primary transition-colors shadow-inner leading-relaxed" id="schema" name="schema" rows={5}>&#123;
        "timestamp": "ISO8601",
        "userId": "string",
        "action": "string",
        "metadata": &#123;&#125;
      &#125;</textarea>
      <button className="absolute top-2 right-2 text-[#94a3b8] hover:text-white transition-colors" title="Format JSON" type="button" data-action-id="format-json-5" onClick={actions?.["format-json-5"]}>
      <Code className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Form Footer (Redundant actions for long forms) */}
      <div className="bg-surface-container-low px-6 md:px-8 py-4 border-t border-outline-variant flex justify-end gap-3">
      <button className="h-[36px] px-4 bg-transparent text-secondary hover:bg-surface-variant rounded font-label-md text-label-md transition-colors" type="button" data-action-id="discard-changes-6" onClick={actions?.["discard-changes-6"]}>
                              Discard Changes
                          </button>
      <button className="h-[36px] px-4 bg-primary text-on-primary rounded font-label-md text-label-md shadow-sm hover:bg-primary-container transition-colors active:opacity-90" type="button" data-action-id="save-record-7" onClick={actions?.["save-record-7"]}>
                              Save Record
                          </button>
      </div>
      </div>
      <div className="h-8"></div> {/* Bottom padding */}
      </div>
      </main>
    </>
  );
}
