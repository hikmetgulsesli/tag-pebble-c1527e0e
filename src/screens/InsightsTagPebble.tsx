// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Tag Pebble
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BarChart3, CircleHelp, Download, Ellipsis, LayoutDashboard, Lightbulb, ListFilter, Pencil, Plus, Settings, SlidersHorizontal, X } from "lucide-react";


export type InsightsTagPebbleActionId = "create-record-1" | "new-record-2" | "export-summary-3" | "filter-list-4" | "review-tags-5" | "more-horiz-6" | "view-all-logs-7" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "help-5" | "operations-6" | "editor-7" | "insights-8";

export interface InsightsTagPebbleProps {
  actions?: Partial<Record<InsightsTagPebbleActionId, () => void>>;

}

export function InsightsTagPebble({ actions }: InsightsTagPebbleProps) {
  return (
    <>
      {/* TopAppBar (Mobile Only) */}
      <header className="md:hidden bg-surface-container-lowest dark:bg-surface-dim flex items-center justify-between px-container-padding h-row-height-md w-full fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline flat no shadows">
      <div className="flex items-center gap-2">
      <LayoutDashboard className="text-primary dark:text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Tag Pebble</span>
      </div>
      <button className="font-body-md text-body-md text-primary dark:text-primary-fixed-dim font-medium hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors active:opacity-80 transition-opacity px-3 py-1 rounded-DEFAULT" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>Create Record</button>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex flex-col p-gutter gap-unit w-64 h-full fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-highest border-r border-outline-variant dark:border-outline flat no shadows">
      <div className="flex items-center gap-3 p-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold font-headline-sm overflow-hidden border border-outline-variant">
      <img className="w-full h-full object-cover" data-alt="A small, professional avatar image of a user profile for a dense metadata management tool. The aesthetic is clean, light mode, and minimal. High quality, crisp resolution, subtle professional lighting, grey tones with a hint of emerald green." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKGjkPg8NTj48YbGiJQcaAYsYYPXWazdFCgjYBAaMozE6HoFmNv-TuQhCiHn9yVhcEoZ25Iq1sO8vuq1SHkdURCkjAr9DRZ14BvNZllVz74MoCTpKUtgK9oEewRuZxiUyWuQj9UG_xU-ObG5piaDOQ0klQ119vkhkpEavrUO6386h9fETNRJTla816ieareyIA5xrNIdN5TOEQ4P_5fImDe_4kNexY-rMrj28fXdTkiLwUCsj_fDpUdmVX9JIq8BhS_HnpHy_60iCO" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Tag Pebble</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant">Management Console</p>
      </div>
      </div>
      <button className="bg-primary text-on-primary font-label-md text-label-md h-[36px] rounded-lg mb-6 flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm w-full mx-auto max-w-[200px]" type="button" data-action-id="new-record-2" onClick={actions?.["new-record-2"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <SlidersHorizontal className="text-[20px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed font-bold rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant rounded-lg font-label-md text-label-md transition-colors active:scale-95 transition-transform" href="#" data-action-id="help-5" onClick={(event) => { event.preventDefault(); actions?.["help-5"]?.(); }}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 pt-[calc(var(--row-height-md)+1rem)] md:pt-0 p-container-padding max-w-[1200px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Insights Overview</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">System performance and tag distribution analysis.</p>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-[36px] px-4 bg-surface-container-lowest text-secondary border border-outline-variant rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="export-summary-3" onClick={actions?.["export-summary-3"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      <button className="h-[36px] w-[36px] bg-surface-container-lowest text-on-surface-variant border border-outline-variant rounded-DEFAULT flex items-center justify-center hover:bg-surface-container-low transition-colors" type="button" aria-label="Filter List" data-action-id="filter-list-4" onClick={actions?.["filter-list-4"]}>
      <ListFilter className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Actionable Hints */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-3 mb-6 flex items-start gap-3">
      <Lightbulb style={{fontVariationSettings: "'FILL' 1"}} className="text-primary mt-0.5 text-[20px]" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <p className="font-label-md text-label-md text-on-surface mb-1">Optimization Opportunity</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Tip: 5 tags have no category assigned. Categorizing them improves query performance by 12%.</p>
      </div>
      <button className="font-label-xs text-label-xs text-primary hover:text-primary-container uppercase tracking-wider font-semibold" type="button" data-action-id="review-tags-5" onClick={actions?.["review-tags-5"]}>Review Tags</button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Metrics Column (Col 1) */}
      <div className="flex flex-col gap-4 lg:col-span-1">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm hover:bg-surface-bright transition-colors">
      <p className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider mb-2">Total Tag Volume</p>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">14,285</span>
      <span className="font-label-xs text-label-xs text-primary flex items-center"><ArrowUp className="text-[12px]" aria-hidden={true} focusable="false" /> 2.4%</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm hover:bg-surface-bright transition-colors">
      <p className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider mb-2">Growth Rate (30d)</p>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">+850</span>
      <span className="font-label-xs text-label-xs text-on-surface-variant">new tags</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm hover:bg-surface-bright transition-colors">
      <p className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider mb-2">Most Active Project</p>
      <div className="flex items-center gap-2 mt-1">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Alpha Core Data</span>
      </div>
      </div>
      </div>
      {/* Visualization Main Area (Col 2 & 3) */}
      <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
      <h3 className="font-label-md text-label-md text-on-surface">State Distribution</h3>
      <span className="font-label-xs text-label-xs text-on-surface-variant">By Category</span>
      </div>
      {/* Compact Bar Chart Simulation */}
      <div className="flex-1 flex flex-col justify-end gap-3 min-h-[200px] mt-2">
      {/* Bar 1 */}
      <div className="flex items-center gap-3">
      <span className="font-label-xs text-label-xs text-on-surface-variant w-16 text-right truncate">System</span>
      <div className="flex-1 h-4 bg-surface-container-low rounded-sm overflow-hidden">
      <div className="h-full bg-primary rounded-sm" style={{width: "75%"}}></div>
      </div>
      <span className="font-mono-label text-mono-label text-on-surface w-10 text-right">45%</span>
      </div>
      {/* Bar 2 */}
      <div className="flex items-center gap-3">
      <span className="font-label-xs text-label-xs text-on-surface-variant w-16 text-right truncate">User Gen</span>
      <div className="flex-1 h-4 bg-surface-container-low rounded-sm overflow-hidden">
      <div className="h-full bg-primary opacity-80 rounded-sm" style={{width: "50%"}}></div>
      </div>
      <span className="font-mono-label text-mono-label text-on-surface w-10 text-right">30%</span>
      </div>
      {/* Bar 3 */}
      <div className="flex items-center gap-3">
      <span className="font-label-xs text-label-xs text-on-surface-variant w-16 text-right truncate">Archived</span>
      <div className="flex-1 h-4 bg-surface-container-low rounded-sm overflow-hidden">
      <div className="h-full bg-secondary opacity-60 rounded-sm" style={{width: "25%"}}></div>
      </div>
      <span className="font-mono-label text-mono-label text-on-surface w-10 text-right">15%</span>
      </div>
      {/* Bar 4 */}
      <div className="flex items-center gap-3">
      <span className="font-label-xs text-label-xs text-on-surface-variant w-16 text-right truncate">Pending</span>
      <div className="flex-1 h-4 bg-surface-container-low rounded-sm overflow-hidden">
      <div className="h-full bg-outline rounded-sm" style={{width: "15%"}}></div>
      </div>
      <span className="font-mono-label text-mono-label text-on-surface w-10 text-right">10%</span>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed (Col 4) */}
      <div className="md:col-span-3 lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
      <h3 className="font-label-md text-label-md text-on-surface">Recent Activity</h3>
      <button  type="button" data-action-id="more-horiz-6" onClick={actions?.["more-horiz-6"]} className="text-on-surface-variant text-[16px] hover:text-on-surface" aria-label="More Horiz"><Ellipsis aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex flex-col gap-0 relative">
      {/* Vertical Line connecting events */}
      <div className="absolute left-[9px] top-2 bottom-4 w-[1px] bg-outline-variant"></div>
      {/* Event 1 */}
      <div className="flex items-start gap-3 py-2 relative bg-surface-container-lowest hover:bg-surface-bright transition-colors px-1 -mx-1 rounded-sm">
      <div className="w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center z-10 mt-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
      </div>
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-surface leading-tight"><span className="font-medium">Batch Update</span> completed</p>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-1">2 mins ago • System</p>
      </div>
      </div>
      {/* Event 2 */}
      <div className="flex items-start gap-3 py-2 relative bg-surface-container-lowest hover:bg-surface-bright transition-colors px-1 -mx-1 rounded-sm">
      <div className="w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center z-10 mt-0.5">
      <Plus className="text-[10px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-surface leading-tight">New tag <span className="bg-surface-container-low px-1 py-0.5 rounded text-[10px] border border-outline-variant font-mono-label">#ui-comp</span> created</p>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-1">15 mins ago • User_88</p>
      </div>
      </div>
      {/* Event 3 */}
      <div className="flex items-start gap-3 py-2 relative bg-surface-container-lowest hover:bg-surface-bright transition-colors px-1 -mx-1 rounded-sm">
      <div className="w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-error border-opacity-50 flex items-center justify-center z-10 mt-0.5">
      <X className="text-[10px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-surface leading-tight">Sync error on Project Delta</p>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-1">1 hr ago • Network</p>
      </div>
      </div>
      </div>
      <button className="mt-auto pt-3 font-label-xs text-label-xs text-primary w-full text-center hover:underline" type="button" data-action-id="view-all-logs-7" onClick={actions?.["view-all-logs-7"]}>View All Logs</button>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant dark:border-outline flex items-center justify-around h-16 z-50 flat no shadows">
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant dark:text-on-surface-variant pb-1" href="#" data-action-id="operations-6" onClick={(event) => { event.preventDefault(); actions?.["operations-6"]?.(); }}>
      <SlidersHorizontal className="text-[24px] mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs">Operations</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant dark:text-on-surface-variant pb-1" href="#" data-action-id="editor-7" onClick={(event) => { event.preventDefault(); actions?.["editor-7"]?.(); }}>
      <Pencil className="text-[24px] mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs">Editor</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1" href="#" data-action-id="insights-8" onClick={(event) => { event.preventDefault(); actions?.["insights-8"]?.(); }}>
      <BarChart3 style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px] mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Insights</span>
      </a>
      </nav>
    </>
  );
}
