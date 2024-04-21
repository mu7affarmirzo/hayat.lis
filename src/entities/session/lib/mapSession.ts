import { type SessionDto } from '../api/types'
import { type Session } from '../model/types'

export function mapSession(dto: SessionDto): Session {
  return {
    accessToken: dto.accessToken,
    refreshToken: dto.refreshToken,
  }
}
