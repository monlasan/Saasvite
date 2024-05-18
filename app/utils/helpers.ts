import crypto from 'crypto'
import { USER_TEMPORARY_TOKEN_EXPIRY } from './constants.js'

export function generateTemporaryToken() {
  // This token should be client facing
  // for example: for email verification unHashedToken should go into the user's mail
  const unHashedToken = crypto.randomBytes(20).toString('hex')

  // This should stay in the DB to compare at the time of verification
  const hashedToken = crypto.createHash('sha256').update(unHashedToken).digest('hex')
  // This is the expiry time for the token (20 minutes)
  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY

  return { unHashedToken, hashedToken, tokenExpiry }
}
