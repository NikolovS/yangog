
import { IPainting } from './painting';
import { IUser } from './user';


export interface IPayment {
    total: number;
    paintings: IPainting[];
    userId: IUser;
    status: string;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number;


}

