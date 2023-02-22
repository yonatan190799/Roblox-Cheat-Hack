import { ANDROID, IOS, RESULTS } from './constants';
declare type Values<T extends object> = T[keyof T];
export { Rationale } from 'react-native';
export declare type AndroidPermission = Values<typeof ANDROID>;
export declare type IOSPermission = Values<typeof IOS>;
export declare type Permission = AndroidPermission | IOSPermission;
export declare type PermissionStatus = Values<typeof RESULTS>;
export declare type NotificationOption = 'alert' | 'badge' | 'sound' | 'carPlay' | 'criticalAlert' | 'provisional';
export interface NotificationSettings {
    alert?: boolean;
    badge?: boolean;
    sound?: boolean;
    carPlay?: boolean;
    criticalAlert?: boolean;
    lockScreen?: boolean;
    notificationCenter?: boolean;
}
export interface NotificationsResponse {
    status: PermissionStatus;
    settings: NotificationSettings;
}
