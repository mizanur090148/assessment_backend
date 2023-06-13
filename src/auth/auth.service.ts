import { sign } from 'jsonwebtoken';
import { UserService } from 'src/shared/user.service';

export class AuthService {
  // define user service
  constructor(private userService: UserService) {}

  async signPayload(payload: any) {
    // token to expire in 12 hours
    let token = sign(payload, 'secretKey', { expiresIn: '12h' });
    return token;
  }

  async validateUser(payload: any) {
    return await this.userService.findByPayload(payload);
  }
}
