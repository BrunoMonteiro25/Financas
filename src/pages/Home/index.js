import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Actions from '../../components/Actions'
import Balance from '../../components/Balance'
import Header from '../../components/Header'
import Movements from '../../components/Movements'

const list = [
  {
    id: 1,
    label: 'Boleto',
    value: '309,60',
    date: '02/11/2022',
    type: 0, // despesas
  },
  {
    id: 2,
    label: 'Pix',
    value: '1.580,00',
    date: '10/11/2022',
    type: 1, // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '30/11/2022',
    type: 1, // receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Header name="Bruno Monteiro" />

      <Balance saldo="9.000,00" gastos="-300,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
})
