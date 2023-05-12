export type buttonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
  };
  style: React.CSSProperties;
};
