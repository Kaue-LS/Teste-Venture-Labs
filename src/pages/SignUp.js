import * as S from '../styles/SignUp-style'
import { useEffect, useState } from 'react'
import { useTheme } from '../components/context/ThemeContext'


import * as moment from 'moment'
import Stepper from '../components/stepper/Stepper'
import {maskPhone,maskOnlyNumbers, maskR$, maskDate, maskCPF} from '../components/mask/Mask'
import {BsCheck} from 'react-icons/bs'

import { useClient } from '../components/context/ClientList'
import { useNavigate } from 'react-router-dom'
export default function SignUp(){
    const navigate=useNavigate()
    const {list}=useClient()
    const {theme}=useTheme()

    const [nome,setNome]=useState('')
    const [sobrenome,setSobrenome]=useState('')
    const [email,setEmail]=useState('')
    const [telefone,setTelefone]=useState('')
    // =========================================
    const [cep,setCep]=useState('')
    const [endereco1,setEndereco1]=useState('')
    const [endereco2,setEndereco2]=useState('')
    // ===================================
    const [dataNasc,setDataNasc]=useState('')
    const [cpf,setCpf]=useState('')
    const [rendaM,setRendaM]=useState('')
    // =============================================
    const [stepper,setStepper]=useState(0)
    const [error,setError]=useState('')
    const [cepError,setCepError]=useState(false)

// console.log(error)
    const Validar=(props)=>{
        const regexp1=/@(gmail|hotmail).com/gi
            // console.log(props)
            // Validação do step 1
        if(props===0){
            
            if(nome.length<3){
                setError('Nome precisa no mínimo 3 caracteres!')
            }
            else if(sobrenome.length<3){
                setError('Sobrenome precisa no mínimo 3 caracteres!')
            }
            else if(!email.match(regexp1)){
                setError('E-Mail inserido incorreto!')
            }
            else if(telefone.length<15){
                setError('Telefone incorreto!')
            }else{
                setError('')
                setStepper(1)
            }
            };
            // console.log(props)
            // Validação do step 2
        if(props===1){
            setError(' ')
            console.log(cep)
        
            if(cep.length<8){
                setError('CEP no minimo 8 caracteres!')
            }
            else if(endereco1.length===0 || cepError ){
                setError('Cep incorreto')
            }
            else{
                setError('')
                setStepper(2)
            }
           
            
            // console.log(cep)
           
            
        };

        // Validação do step 3
        if(props===2){
            let regexData=moment(dataNasc.toString(), "DD/MM/YYYY",true).isValid();
            // let regexCPF=/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
            if(dataNasc.length>10 || !regexData){
                setError('Data incorreta!')
                // console.log(dataNasc.match(regexData))
            }
            else if(cpf.length<14){
                setError("CPF incorreto!")
            }
            else if(rendaM.length===0){
                setError('Digite sua renda mensal')
            }else{
                setError('')
                let data={
                    nome,
                    sobrenome,
                    email,
                    telefone,
                    cep,
                    endereco1,
                    endereco2,
                    dataNasc,
                    cpf,
                    rendaM
                }
                list.push(data)
                setStepper(3)
                console.log(list)
            }

        }
        }
    


// Localizando endereço 1 pelo cep digitado
// https://viacep.com.br/ws/${cep}/json/

    useEffect(()=>{
  
         if(cep.length===8){
            const FetchCep=async()=>{
        
                if(cep.length===8){
                    const response=await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                   
                    const Api=await response.json()
                    if(Api.erro){
                        setError('Cep incorreto')
                        setCepError(true)
                    }
                    else{
                        setCepError(false)
                
                    // console.log(response)
                    // console.log(Api)
        
                    setEndereco1(Api.logradouro)
                    }
                }
            }
            FetchCep()
        }
    },[stepper,cep])

    return(
        <S.SignUp>
            <S.Title>Página de Cadastro</S.Title>
            <Stepper total={3} done={stepper}/>
            <S.Form 
             width={{
        "@initial": "large",
        "@bp3": "large",
        "@bp2": "normal",
        "@bp1": "small",
      }}>
                {stepper===0&&(
                <>
                {error.length>0  &&(
              <S.Error>
                {error}
                </S.Error>
                )}
                <S.FormControl>
                    <S.Label htmlFor='nome'>Nome:</S.Label>
                    <S.Input themes={theme} name='nome' value={nome} id='error-1' type='text' placeholder='Digite seu nome' onChange={(e)=>setNome(e.target.value)} minLength={3} required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor='sobrenome'>Sobrenome:</S.Label>
                    <S.Input themes={theme} name='sobrenome'  value={sobrenome} type='text' placeholder='Digite seu sobrenome' onChange={(e)=>setSobrenome(e.target.value)}  minLength={3}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor='email'>E-Mail:</S.Label>
                    <S.Input themes={theme} name='email'  value={email} type='email' placeholder='Digite o seu E-Mail'  onChange={(e)=>setEmail(e.target.value)}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor='tel'>Telefone:</S.Label>
                    <S.Input themes={theme} name='tel' value={telefone} type='text' placeholder='Digite seu telefone Ex:(xx) xxxxx-xxxx' maxLength={15} onChange={(e)=>setTelefone(maskPhone(e.target.value))}  required/>
                </S.FormControl>
                <S.AreaButton>
                {/* ============================================= */}
                    {/* {stepper>0 && stepper <=2 &&(
                        <S.Button  onClick={()=>setStepper(stepper-1)} type='button' step={'voltar'}>Voltar</S.Button>
                    )} */}
                        <S.Button onClick={()=>Validar(stepper)} type='button' step={'proximo'}>Próximo</S.Button>
                      {/* {stepper===2&&(
                        <S.Button onClick={()=>Validar()} type='button' step={'proximo'}>Concluir</S.Button>
                    )} */}
                </S.AreaButton>
                </>
                )}
                
                {/* ======================================================== */}

                {stepper===1&&(
                <>
                {error.length>0  &&(
              <S.Error>
                {error}
                </S.Error>
                )}
                <S.FormControl>
                    <S.Label htmlFor='cep'>CEP:</S.Label>
                    <S.Input themes={theme} name='cep' value={cep}   type='text' placeholder='Digite seu cep (Somente números)' minLength={8} maxLength={8} onChange={(e)=>setCep(maskOnlyNumbers(e.target.value))}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor='end1'>Endereço 1:</S.Label>
                    <S.Input themes={theme} name='end1'  value={endereco1} placeholder='Endereço principal' disabled type='text' onChange={(e)=>setEndereco1(e.target.value)}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor='end2'>Endereço 2:{'(Opcional)'}</S.Label>
                    <S.Input themes={theme} name='end2'  value={endereco2} type='text' placeholder='Endereço opcional' onChange={(e)=>setEndereco2(e.target.value)}  required/>
                </S.FormControl>
                <S.AreaButton>
                {/* ============================================= */}
                        <S.Button  onClick={()=>setStepper(stepper-1)} type='button' step={'voltar'}>Voltar</S.Button>
                        <S.Button onClick={()=>Validar(stepper)} type='button' step={'proximo'}>Próximo</S.Button>
                </S.AreaButton>
                </>
                )}
                
                {/* ======================================================== */}

                {stepper===2&&(
                <>
                  {error.length>0  &&(
              <S.Error>
                {error}
                </S.Error>
                )}
                <S.FormControl>
                    <S.Label htmlFor=''>Data de Nascimento:</S.Label>
                    <S.Input themes={theme} name='' value={dataNasc} type='text' maxLength={10} onChange={(e)=>setDataNasc(maskDate( e.target.value))}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor=''>CPF:</S.Label>
                    <S.Input themes={theme} name='' value={cpf} type='text' maxLength={14} onChange={(e)=>setCpf( maskCPF( e.target.value))}  required/>
                </S.FormControl>
                <S.FormControl>
                    <S.Label htmlFor=''>Renda Mensal:</S.Label>
                    <S.Input themes={theme} name='' value={rendaM} type='text' onChange={(e)=>setRendaM(maskR$(e.target.value))}  required/>
                </S.FormControl>
                <S.AreaButton>
                {/* ============================================= */}
                        <S.Button  onClick={()=>setStepper(stepper-1)} type='button' step={'voltar'}>Voltar</S.Button>
                        <S.Button onClick={()=>Validar(stepper)} type='button' step={'proximo'}>Concluir</S.Button>
                </S.AreaButton>
                </>
                )}
                {stepper===3&&(
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <S.Title>
                    Cadastrado com sucesso!
                    </S.Title>
                    <S.Check>
                    <BsCheck></BsCheck>
                    </S.Check>
                    <S.AreaButton>
                        <S.Button step={'proximo'} onClick={()=>navigate('/')}>Voltar ao início</S.Button>
                    </S.AreaButton>
                    </div>
                )}
               
            </S.Form>
        </S.SignUp>
    )
}