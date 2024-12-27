import { PRODUCTS } from '@/assets/products'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProductListItem from '@/components/product-list-item'
import ListHeader from '@/components/list-header'

export default function Shop() {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
        className='gap-10'
      />
    </View>
  )
}
