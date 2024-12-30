import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Alert, Platform, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useCartStore } from '@/store/cart-store'
import { Toast } from 'react-native-toast-notifications'
import { CartItemType, CartState } from '@/assets/types/cart'

export default function Cart() {
  const { items, addItem, incrementItem, decrementItem, getTotalPrice, removeItem } = useCartStore()

  const handleCheckout = () => {
    Alert.alert('Proceeding to Checkout', `Total amount $${getTotalPrice()}`)
    Toast.show(`Total amount $${getTotalPrice()}`, {
      type: 'success',
      duration: 2000,
      animationType: 'zoom-in',
    })
  }

  const CartItem = ({ item }: { item: CartItemType }) => {
    return (
      <View style={styles.cartItem}>
        <Image
          source={item.image}
          style={styles.itemImage}></Image>
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementItem(item.id)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementItem(item.id)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeItem(item.id)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  cartList: {
    paddingVertical: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 8,
    backgroundColor: '#ff5252',
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    paddingBottom: 4,
    fontWeight: 'bold',
  },
})
