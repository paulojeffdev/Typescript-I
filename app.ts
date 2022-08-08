import { Cliente } from './Cliente'
import { Empregado } from './Empregado'
import { Pessoa } from './Pessoa'

let pessoa1 : Pessoa = new Pessoa("Paulo Jefferson Mendes Oliveira", 26, "São Paulo", "Boituva", "0")
pessoa1.apresentar()

let pessoa2 : Pessoa = new Pessoa("Silvia Mendes", 45, "São Paulo", "São Paulo", "0")
pessoa2.apresentar()

let cliente : Cliente = new Cliente("Matheus Carvalho", 45, "São Paulo", "São Paulo", true, "0")
cliente.apresentar()
cliente.verificarAssinatura()
console.log(cliente.getCpf())
cliente.setCpf("00000000")
console.log(cliente.getCpf())

let empregado : Empregado = new Empregado("João Paulo", 20, "São Paulo", "Santos", "0")
empregado.apresentar()
empregado.contrato()