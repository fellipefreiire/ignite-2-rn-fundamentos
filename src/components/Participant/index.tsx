import * as S from './styles'

interface IParticipantProps {
  name: string
  onRemove: () => void
}

export const Participant = ({ name, onRemove }: IParticipantProps) => {
  return (
    <S.ParticipantContainer>
      <S.Name>
        {name}
      </S.Name>
      <S.Button
        onPress={onRemove}
      >
        <S.ButtonText>-</S.ButtonText>
      </S.Button>
    </S.ParticipantContainer>
  )
}