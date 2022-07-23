import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './dto/user.model';
// import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';
import { PrismaService } from 'prisma';
// import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [User])
  async users() {
    return this.usersService.getUsers({});
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Mutation(() => User)
  //   createUsers(@Args('createUserInput') createUserInput: CreateUserInput) {
  createUsers() {
    return this.usersService.createUsers({
      //   name: createUserInput.name,
      //   email: createUserInput.email,
      name: 'aaa',
      email: 'aaa',
    });
  }

  @Mutation(() => User)
  updateUsers() // @Args('updateUserInput') updateUserInput: UpdateUserInput,
  // @CurrentUser() user: CurrentUser,
  {
    return this.usersService.updateUsers({
      //   id: user.id,
      //   name: updateUserInput.name,
      //   email: updateUserInput.email,
      id: 'aa',
      name: 'aa',
      email: 'aa',
    });
  }
}
