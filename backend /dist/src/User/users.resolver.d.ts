import { UsersService } from './users.service';
import { PrismaService } from 'prisma';
export declare class UsersResolver {
    private prisma;
    private usersService;
    constructor(prisma: PrismaService, usersService: UsersService);
    sayHello(): string;
    users(): Promise<import(".prisma/client").User[]>;
    getUserByEmail(email: string): Promise<import(".prisma/client").User>;
    createUsers(): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    updateUsers(): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
