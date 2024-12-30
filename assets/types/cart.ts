import { ImageSourcePropType } from 'react-native'

export type CartItemType = {
  id: number
  title: string
  image: ImageSourcePropType
  price: number
  quantity: number
  maxQuantity: number
}

export type CartState = {
  items: CartItemType[]
  addItem: (item: CartItemType) => void
  removeItem: (id: number) => void
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
  getTotalPrice: () => string
  getItemCount: () => number
  resetCart: () => void
}
