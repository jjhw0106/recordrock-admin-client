
export interface DelimiterFilterProps {
  condition: string;
  isActive: boolean;
  onClick: (condition: string, isActive: boolean)=>void;
}