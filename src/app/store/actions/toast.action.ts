import { Toast } from '../models/toast';

export class ToastAction{
    static readonly type = '[ToastAction] Toast message';
    constructor(public payload: Toast) {}
}