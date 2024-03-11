import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from "class-validator";

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: "Name must have at least 2 characters." })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: "Username must have at least 3 characters." })
  @IsAlphanumeric(undefined, {
    message: "Username does not allow alphanumeric characters.",
  })
  username: string;

  @IsNotEmpty()
  @IsEmail(undefined, { message: "Please provide a valid email address." })
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain minimum 8 and maximum 20 characters,
  at least one uppercase letter
  one lowercase letter
  one number and
  one special character`,
  })
  password: string;
}
