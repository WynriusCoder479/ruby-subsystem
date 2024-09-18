import { hdb } from '@/features/credit-card/products/constants/hdb.constant'
import { tbpevo } from '@/features/credit-card/products/constants/tpbevo.constant'
import { vib } from '@/features/credit-card/products/constants/vib.constant'
import { vpbank } from '@/features/credit-card/products/constants/vpbank.constant'

export const products = [...hdb, ...tbpevo, ...vib, ...vpbank]
