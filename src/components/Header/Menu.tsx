import { cn } from "@/utils/cn";

export const Menu: React.FC<{ className?: string }> = ({ className }) => {
  return (<nav>
    <ul className={cn(className)}>
      <li>Coins</li>
      <li>Become a Partner</li>
      <li>News</li>
      <li>FAQ</li>
    </ul>
  </nav>);
};