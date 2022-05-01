import * as S from "../styles/Client-style";
import { useTheme } from "../components/context/ThemeContext";
export default function Client({data,openClient}) {
  const { theme } = useTheme();
  return (
    <S.Client>
      <S.Box
        themes={theme}
        width={{
          "@initial": "large",
          "@bp3": "large",
          "@bp2": "normal",
          "@bp1": "small",
        }}
      >
        <S.BoxControl>
          <S.Label>Nome:</S.Label>
          <S.Data>{data.nome}</S.Data>
        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Sobrenome:</S.Label>
          <S.Data>{data.sobrenome}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>E-Email:</S.Label>
          <S.Data>{data.email}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Telefone:</S.Label>
          <S.Data>{data.telefone}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Cep:</S.Label>
          <S.Data>{data.cep}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Endereço 1:</S.Label>
          <S.Data>{data.endereco1}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Endereço 2:</S.Label>
          <S.Data>{data.endereco1}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>Data de Nascimento:</S.Label>
          <S.Data>{data.dataNasc}</S.Data>

        </S.BoxControl>

        <S.BoxControl>
          <S.Label>CPF:</S.Label>
          <S.Data>{data.cpf}</S.Data>

        </S.BoxControl>
        
        <S.BoxControl>
          <S.Label>Renda Mensal:</S.Label>
          <S.Data>{data.rendaM}</S.Data>

        </S.BoxControl>
        <S.AreaButton>
            <S.Button step={'proximo'} onClick={openClient}>Fechar</S.Button>
        </S.AreaButton>
      </S.Box>
    </S.Client>
  );
}
