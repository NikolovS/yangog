
import { IUser } from './user';

export interface IPainting {
    name: string;
    description: string;
    author: IUser;
    price: number;
    isSold: boolean;
    image: string;
}
