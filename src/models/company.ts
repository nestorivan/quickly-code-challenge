
export interface Company {
  tax_rate: number
  id: number
  name: string
  primary_email: string
  phone: string
  address_line_1: string
  address_line_2: string
  address_city: string
  address_state: string
  address_zip: string
  max_credit_amount: string
  address_country: string
  approved: boolean
  default_currency: string
  logo_url: string
  vopay_client_id: string
  default_erp_early_pay_account: string
  default_erp_revenue_account: string
  tax_number: string
  railz_id: string
  is_syncing: boolean
  last_sync_at: string
  fee_type: string
  variable_rate: number
  flat_rate: number
  advance_rate: number
  vendor_fee_type: string
  vendor_variable_rate: number
  vendor_flat_rate: number
  createdAt: string
  updatedAt: string
  deleted_at: string
  Connections: any[]
}
