import { styled } from "stitches-native";

export const ParticipantContainer = styled('View', {
  width: '100%',
  backgroundColor: '#1F1E25',
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
})

export const Name = styled('Text', {
  flex: 1,
  fontSize: 16,
  color: '#FFF',
  marginLeft: 16
})

export const Button = styled('TouchableOpacity', {
  width: 56,
  height: 56,
  borderRadius: 5,
  backgroundColor: '#E23C44',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ButtonText = styled('Text', {
  color: '#fff',
  fontSize: 24,
})
