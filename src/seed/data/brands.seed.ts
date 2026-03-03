import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "GMC",
        createdAt: new Date().getTime(),
    }
];