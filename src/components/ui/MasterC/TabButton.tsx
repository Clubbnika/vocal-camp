import {
  TAB_BUTTON_BASE_STYLE,
  TAB_BUTTON_ACTIVE_STYLE,
  TAB_BUTTON_INACTIVE_STYLE,
} from "@/components/ui/MasterC/styles"

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`${TAB_BUTTON_BASE_STYLE} ${isActive ? TAB_BUTTON_ACTIVE_STYLE : TAB_BUTTON_INACTIVE_STYLE}`}
    style={{
      fontSize: '0.875rem',
      background: 'transparent',
      padding: '0rem',
      paddingBottom: '1rem',
      paddingTop: '1rem'
    }}
  >
    {label}
  </button>
);

export default TabButton;