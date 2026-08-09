/// <reference types="react" />
import { Alert, AlertColor } from '@mui/material';
interface Alert {
    alertType: AlertColor;
    content: string;
}
type PushAlert = (alert: Alert) => void;
declare const AlertProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react").JSX.Element;
export declare const useAlert: () => PushAlert;
export default AlertProvider;
//# sourceMappingURL=AlertProvider.d.ts.map