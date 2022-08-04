import { useState } from 'react'
import { Alert, FlatList, StatusBar } from 'react-native'
import { Participant } from '../../components/Participant'
import * as S from './styles'

type Participant = {
  id: string
  name: string
}

export const Home = () => {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [name, setName] = useState('')

  const handleAddParticipant = () => {
    if (name.trim() === '') {
      setName('')
      return
    }

    if (participants.filter(participant => participant.name === name.trim()).length > 0) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }

    setParticipants(prev =>
      [...prev, { id: new Date().getTime().toString(), name: name.trim() }]
    )
    setName('')
  }

  const handleRemoveParticipant = (id: string, name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(
            prev => prev.filter(participant => participant.id !== id)
          )
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <S.Container>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='light-content'
      />
      <S.EventName>Nome do evento</S.EventName>
      <S.EventDate>Sexta, 4 de Novembro de 2022</S.EventDate>

      <S.Form>
        <S.Input
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          value={name}
          onChangeText={setName}
        />

        <S.Button
          onPress={handleAddParticipant}
        >
          <S.ButtonText>+</S.ButtonText>
        </S.Button>
      </S.Form>

      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item.id, item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <S.ListEmptyText>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença
          </S.ListEmptyText>
        )}
      />
    </S.Container>
  )
}