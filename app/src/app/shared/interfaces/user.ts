import { IPainting } from './painting';
import { IPayment } from './payment';


export interface IUser {
    phone: string;
    email: string;
    username: string;
    password: string;
    paintings: IPainting[];
    payments: IPayment[];
    isAdmin: boolean;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number;

}
