import { ProductCardProps } from "../misc/types"

/*********************************************************************************** carrito */
export const SET_CART_COUNT = "SET_CART_COUNT"

export const TOGGLE_CART_MODAL = "TOGGLE_CART_MODAL"

export interface CartState {
	cart: {
		count: number
		open: boolean
	}
}

export interface CartCountItemsAction {
	type: typeof SET_CART_COUNT
	payload: number
}

export interface CartOpenAction {
	type: typeof TOGGLE_CART_MODAL
	payload: boolean
}

export type CartAction = CartCountItemsAction | CartOpenAction

/*********************************************************************************** Products */

export const SET_PRODUCT_TO_DISPLAY = "SET_PRODUCT_TO_DISPLAY"

export interface ProductState {
	product: ProductCardProps
}

export interface DisplayProductAction {
	type: typeof SET_PRODUCT_TO_DISPLAY
	payload: ProductCardProps
}

export type ProductActions = DisplayProductAction
