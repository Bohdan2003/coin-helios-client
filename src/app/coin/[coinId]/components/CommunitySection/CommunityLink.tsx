type TCommunityLinkProps = {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

export const CommunityLink: React.FC<TCommunityLinkProps> = ({
  text,
  href,
  icon,
}) => {
  return (
    <a
      className="px-[6px] h-[32px] flex gap-[6px] items-center rounded-[8px] bg-blue/20 opacity-70 hover:opacity-90 duration-300"
      href={href}
    >
      { text }
      { icon }
    </a>
  );
};