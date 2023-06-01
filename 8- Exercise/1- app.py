cursos = [{'Código': 123, 'Nome': 'Sistema de informação', 'Duração': 4},
         {'Código': 213, 'Nome': 'Ciência de Dados', 'Duração': 4},
         {'Código': 321, 'Nome': 'Engenharia Biomédica', 'Duração': 5}]

cod_curso = 213

def obter_duracao(cod, cursos):
    for curso in cursos:
       if curso["Código"] == cod:
           print("A duração do curso é", curso['Duração'] )


obter_duracao(cod_curso, cursos)