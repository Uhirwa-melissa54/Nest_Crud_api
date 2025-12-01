import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Read JWT from "Authorization: Bearer <token>"
      secretOrKey: 'SECRET_KEY', // Replace with env variable
      ignoreExpiration: false,
    })