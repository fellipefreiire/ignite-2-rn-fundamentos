import { styled } from 'stitches-native'

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '#131016',
  padding: 24,
})

export const EventName = styled('Text', {
  color: '#FFF',
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 48
})

export const EventDate = styled('Text', {
  color: '#6B6B6B',
  fontSize: 16
})

export const Input = styled('TextInput', {
  height: 56,
  flex: 1,
  borderRadius: 5,
  backgroundColor: '#1F1E25',
  color: '#FFF',
  padding: 16,
  fontSize: 16,
  marginRight: 12,
})

export const Button = styled('TouchableOpacity', {
  width: 56,
  height: 56,
  borderRadius: 5,
  backgroundColor: '#31CF67',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ButtonText = styled('Text', {
  color: '#fff',
  fontSize: 24,
})

export const Form = styled('View', {
  width: '100%',
  marginTop: 36,
  marginBottom: 42,
  flexDirection: 'row',
})

export const ListEmptyText = styled('Text', {
  color: '#FFF',
  fontSize: 14,
  textAlign: 'center'
})