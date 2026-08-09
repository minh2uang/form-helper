/// <reference types="react" />
import { ButtonProps } from '@mui/material';
interface AsyncableButtonProps extends ButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => Promise<void> | void;
}
declare const AsyncableButton: React.FC<AsyncableButtonProps>;
export default AsyncableButton;
//# sourceMappingURL=index.d.ts.map