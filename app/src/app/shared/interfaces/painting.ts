
import { IUser } from './user';

export interface IPainting {
    name: string;
    description: string;
    author: IUser;
    price: number;
    isSold: boolean;
    image: string;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number;
    buyer: IUser;
}
