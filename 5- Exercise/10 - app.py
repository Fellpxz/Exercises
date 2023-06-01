def contar_ocorrencias(numero, vetor):
    return vetor.count(numero)

meu_vetor = [1, 2, 3, 4, 2, 1, 2, 4, 5]
numero_verificado = 2

ocorrencias = contar_ocorrencias(numero_verificado, meu_vetor)
print("O número", numero_verificado, "ocorre", ocorrencias, "vezes no vetor.")
