def contar_ocorrencias(numero, vetor):
    contador = 0
    for elemento in vetor:
        if elemento == numero:
            contador += 1
    return contador


vetor = [1, 2, 3, 4, 1, 1, 2, 1]
numero = 1
ocorrencias = contar_ocorrencias(numero, vetor)
print(f'O número {numero} ocorre {ocorrencias} vezes no vetor.')
