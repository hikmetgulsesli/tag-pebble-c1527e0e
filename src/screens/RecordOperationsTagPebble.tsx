// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Tag Pebble
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CalendarDays, CircleHelp, Download, ListFilter, Pencil, Plus, RefreshCw, Search, Settings, SlidersHorizontal, Tag, TriangleAlert, X } from "lucide-react";


export type RecordOperationsTagPebbleActionId = "new-record-1" | "create-record-2" | "status-all-3" | "last-30-days-4" | "refresh-5" | "export-6" | "close-7" | "edit-8" | "retry-load-9" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "help-5";

export interface RecordOperationsTagPebbleProps {
  actions?: Partial<Record<RecordOperationsTagPebbleActionId, () => void>>;

}

export function RecordOperationsTagPebble({ actions }: RecordOperationsTagPebbleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col p-gutter gap-unit w-64 h-full bg-surface-container-low border-r border-outline-variant shrink-0 z-10">
      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-4 mb-4">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                      TP
                  </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary">Tag Pebble</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant">Management Console</p>
      </div>
      </div>
      {/* CTA */}
      <button className="flex items-center justify-center gap-2 w-full h-[36px] bg-primary text-on-primary rounded-DEFAULT hover:opacity-90 transition-opacity mb-6 font-label-md text-label-md" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      {/* Main Navigation */}
      <div className="flex flex-col gap-1 flex-grow">
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container font-bold rounded-lg font-label-md text-label-md active:scale-95 transition-transform" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <SlidersHorizontal data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="help-5" onClick={(event) => { event.preventDefault(); actions?.["help-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
      {/* Top App Bar (Mobile Fallback / Action Row) */}
      <header className="flex items-center justify-between px-container-padding h-row-height-md w-full bg-surface-container-lowest border-b border-outline-variant shrink-0">
      <div className="flex items-center gap-4">
      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Record Operations</h2>
      </div>
      <div className="flex items-center gap-3">
      <div className="relative w-64 hidden sm:block">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input aria-label="Search records" className="w-full h-[28px] pl-9 pr-3 py-1 bg-surface rounded-DEFAULT border border-outline-variant text-body-sm font-body-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow" placeholder="Search records..." type="text" />
      </div>
      <button className="flex items-center justify-center gap-2 h-[28px] px-3 bg-primary text-on-primary rounded-DEFAULT hover:opacity-90 transition-opacity font-label-md text-label-md" type="button" data-action-id="create-record-2" onClick={actions?.["create-record-2"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                          Create Record
                      </button>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <div className="flex-1 overflow-auto p-container-padding flex flex-col gap-6">
      {/* Summary Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
      <div className="bg-surface-container-lowest p-4 border border-outline-variant rounded-lg flex flex-col gap-1">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Total Tags</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface text-2xl">14,208</span>
      <span className="font-label-xs text-label-xs text-primary">+12%</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-4 border border-outline-variant rounded-lg flex flex-col gap-1">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Active Today</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface text-2xl">8,432</span>
      <span className="font-label-xs text-label-xs text-primary">+5%</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-4 border border-outline-variant rounded-lg flex flex-col gap-1">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Recently Removed</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface text-2xl">124</span>
      <span className="font-label-xs text-label-xs text-error">-2%</span>
      </div>
      </div>
      </div>
      {/* Main Data Section (Table + Preview Split) */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
      {/* Data Table Panel */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col min-w-0 overflow-hidden">
      {/* Table Toolbar */}
      <div className="flex items-center justify-between p-2 border-b border-outline-variant bg-surface-container-low shrink-0">
      <div className="flex gap-2">
      <button className="flex items-center gap-1 px-2 py-1 h-6 bg-surface text-on-surface-variant border border-outline-variant rounded-DEFAULT font-label-xs text-label-xs hover:bg-surface-variant transition-colors" type="button" data-action-id="status-all-3" onClick={actions?.["status-all-3"]}>
      <ListFilter className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Status: All
                                  </button>
      <button className="flex items-center gap-1 px-2 py-1 h-6 bg-surface text-on-surface-variant border border-outline-variant rounded-DEFAULT font-label-xs text-label-xs hover:bg-surface-variant transition-colors" type="button" data-action-id="last-30-days-4" onClick={actions?.["last-30-days-4"]}>
      <CalendarDays className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Last 30 Days
                                  </button>
      </div>
      <div className="flex gap-1">
      <button className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-DEFAULT transition-colors" title="Refresh" type="button" data-action-id="refresh-5" onClick={actions?.["refresh-5"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-DEFAULT transition-colors" title="Export" type="button" data-action-id="export-6" onClick={actions?.["export-6"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Table Container */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-lowest z-10 border-b border-outline-variant shadow-sm">
      <tr>
      <th className="px-4 py-2 font-label-xs text-label-xs text-on-surface-variant font-medium">Tag Name</th>
      <th className="px-4 py-2 font-label-xs text-label-xs text-on-surface-variant font-medium">Created Date</th>
      <th className="px-4 py-2 font-label-xs text-label-xs text-on-surface-variant font-medium">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/50">
      {/* Row 1 - Selected State */}
      <tr className="h-row-height-sm hover:bg-surface-container-low bg-secondary-container/20 cursor-pointer transition-colors">
      <td className="px-4 py-1">
      <div className="flex items-center gap-2">
      <Tag className="text-[16px] text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface font-medium">inventory-q3-batch-A</span>
      </div>
      </td>
      <td className="px-4 py-1 font-mono-label text-mono-label text-on-surface-variant">2023-10-24 14:32:01</td>
      <td className="px-4 py-1">
      <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Active</span>
      </div>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="h-row-height-sm hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="px-4 py-1">
      <div className="flex items-center gap-2">
      <Tag className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">shipping-priority-high</span>
      </div>
      </td>
      <td className="px-4 py-1 font-mono-label text-mono-label text-on-surface-variant">2023-10-23 09:15:44</td>
      <td className="px-4 py-1">
      <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Active</span>
      </div>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="h-row-height-sm hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="px-4 py-1">
      <div className="flex items-center gap-2">
      <Tag className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">returns-pending-review</span>
      </div>
      </td>
      <td className="px-4 py-1 font-mono-label text-mono-label text-on-surface-variant">2023-10-22 16:45:12</td>
      <td className="px-4 py-1">
      <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Needs Review</span>
      </div>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="h-row-height-sm hover:bg-surface-container-low cursor-pointer transition-colors opacity-70">
      <td className="px-4 py-1">
      <div className="flex items-center gap-2">
      <BadgeHelp className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">promo-summer-2023</span>
      </div>
      </td>
      <td className="px-4 py-1 font-mono-label text-mono-label text-on-surface-variant">2023-06-01 00:00:00</td>
      <td className="px-4 py-1">
      <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#64748b]"></div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Draft/Inactive</span>
      </div>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="h-row-height-sm hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="px-4 py-1">
      <div className="flex items-center gap-2">
      <Tag className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">vendor-x-restock</span>
      </div>
      </td>
      <td className="px-4 py-1 font-mono-label text-mono-label text-on-surface-variant">2023-10-20 11:30:05</td>
      <td className="px-4 py-1">
      <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Active</span>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Preview Panel (Right Side) */}
      <div className="w-full lg:w-80 bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col shrink-0 overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-start shrink-0">
      <div>
      <div className="flex items-center gap-2 mb-1">
      <Tag className="text-[18px] text-primary" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">inventory-q3-batch-A</h3>
      </div>
      <span className="font-mono-label text-mono-label text-on-surface-variant block">ID: tag_09x8f7a6</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Close" data-action-id="close-7" onClick={actions?.["close-7"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col gap-6">
      {/* Metadata section */}
      <div className="flex flex-col gap-3">
      <h4 className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider border-b border-outline-variant pb-1">Details</h4>
      <div className="grid grid-cols-2 gap-y-2">
      <div className="font-label-xs text-label-xs text-on-surface-variant">Status</div>
      <div className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div> Active
                                      </div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Created By</div>
      <div className="font-body-sm text-body-sm text-on-surface">system_auto</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Location</div>
      <div className="font-body-sm text-body-sm text-on-surface">Warehouse B, Sec 4</div>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
      <span className="inline-flex items-center h-5 px-2 bg-surface-container-high text-on-surface-variant rounded-DEFAULT font-label-xs text-label-xs border border-outline-variant/50">#q3</span>
      <span className="inline-flex items-center h-5 px-2 bg-surface-container-high text-on-surface-variant rounded-DEFAULT font-label-xs text-label-xs border border-outline-variant/50">#batch-A</span>
      <span className="inline-flex items-center h-5 px-2 bg-surface-container-high text-on-surface-variant rounded-DEFAULT font-label-xs text-label-xs border border-outline-variant/50">#high-priority</span>
      </div>
      </div>
      {/* Activity Log */}
      <div className="flex flex-col gap-3">
      <h4 className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider border-b border-outline-variant pb-1">ActivityEvent Logs</h4>
      <div className="flex flex-col gap-3 relative before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-outline-variant">
      <div className="flex gap-3 relative">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary flex-shrink-0 z-10 mt-0.5"></div>
      <div className="flex flex-col gap-0.5">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Status Changed to Active</span>
      <span className="font-mono-label text-mono-label text-on-surface-variant">2023-10-24 14:35:12</span>
      </div>
      </div>
      <div className="flex gap-3 relative">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex-shrink-0 z-10 mt-0.5"></div>
      <div className="flex flex-col gap-0.5">
      <span className="font-body-sm text-body-sm text-on-surface">Metadata Updated</span>
      <span className="font-mono-label text-mono-label text-on-surface-variant">2023-10-24 14:33:45</span>
      </div>
      </div>
      <div className="flex gap-3 relative">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex-shrink-0 z-10 mt-0.5"></div>
      <div className="flex flex-col gap-0.5">
      <span className="font-body-sm text-body-sm text-on-surface">Record Created</span>
      <span className="font-mono-label text-mono-label text-on-surface-variant">2023-10-24 14:32:01</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="p-3 border-t border-outline-variant bg-surface-container-lowest shrink-0 flex justify-end gap-2">
      <button className="h-[28px] px-3 bg-surface text-secondary border border-secondary rounded-DEFAULT hover:bg-surface-variant transition-colors font-label-md text-label-md" type="button" data-action-id="edit-8" onClick={actions?.["edit-8"]}>
                                  Edit
                              </button>
      </div>
      </div>
      </div>
      {/* Simulated Error State Section (Bottom) */}
      <div className="bg-error-container/20 border border-error/30 rounded-lg p-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
      <TriangleAlert className="text-error" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm font-medium text-on-surface">Failed to sync 3 recent operations.</span>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Check network connection or review logs for details.</span>
      </div>
      </div>
      <button className="h-[28px] px-3 bg-surface text-secondary border border-secondary rounded-DEFAULT hover:bg-surface-variant transition-colors font-label-md text-label-md" type="button" data-action-id="retry-load-9" onClick={actions?.["retry-load-9"]}>
                          Retry Load
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
