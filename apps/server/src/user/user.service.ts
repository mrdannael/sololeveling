import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { User } from "./entities/user.entity.js";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOneBy({ id });
  }

  removeUser(id: number): Promise<{ affected?: number | null }> {
    return this.userRepository.delete(id);
  }
}
