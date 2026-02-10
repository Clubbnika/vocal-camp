export const styles = {
  overlay: "fixed inset-0 backdrop-blur-sm bg-black/70 flex justify-center items-start z-50 p-3 sm:p-4 overflow-y-auto py-10 sm:items-center",
  modalCard: "bg-white p-5 sm:p-6 rounded-lg w-full sm:w-4/5 max-w-5xl h-auto mb-8 sm:mb-0 relative",
  tabTrigger: (isActive: boolean) => `flex-1 py-4 sm:py-5 px-3 sm:px-4 text-base sm:text-lg font-semibold transition-colors ${isActive ? 'text-[#ff00be]' : 'text-gray-700'}`,
  tabUnderline: (activeTab: number) => `absolute bottom-0 h-[3px] bg-[#ff00be] transition-all duration-300 w-1/2 ${activeTab === 1 ? 'left-0' : 'left-1/2'}`,
  qtyBtn: "bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm",
  primaryBtn: "bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm",
  addBtn: "bg-[#ff00be] hover:bg-[#d900a3] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm",
  addBtnSmall: "bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm",
};