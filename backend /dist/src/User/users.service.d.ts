import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers({}: {}): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    getUserByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    createUsers({ name, email }: {
        name: string;
        email: string;
    }): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    updateUsers({ id, name, email, }: {
        id: string;
        name: string;
        email: string;
    }): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
