import { Company } from "./company"

export interface User {
  full_name: string
  id: number
  first_name: string
  last_name: string
  email: string
  cognito_id: string
  company_id: number
  phone: any
  avatar_url: any
  createdAt: string
  updatedAt: string
  deleted_at: any
  CompanyId: number
  Company: Company
  intercom_hash: string
  roles: string
  verified: boolean
}
