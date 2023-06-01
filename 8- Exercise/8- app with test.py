Professor = [{'Matrícula' : 94949494, 'Nome': 'André Carvalho'},
             {'Matrícula' : 99123321, 'Nome': 'Mário Lima'},
             {'Matrícula' : 98765432, 'Nome': 'Daniele Almeida'}]

Turma =[{'ID' : 123123, 'Ano' : 2022, 'Semestre' : 2, 'Letra' : "A", 'CodigoDisciplina' : 12345, 'MatriculaProfessor' : 99123321},
        {'ID' : 123124, 'Ano' : 2022, 'Semestre' : 1, 'Letra' : ' B', 'CodigoDisciplina' : 12345, 'MatriculaProfessor' : 98765432},
        {'ID' : 123125, 'Ano' : 2022, 'Semestre' : 1, 'Letra' : 'A', 'CodigoDisciplina' : 11211, 'Matricula Professor' : 99123321},]

get_id = 123125

def get_professor_name(id, turma, professor):
    for item in turma:
        try:
            if item['ID'] == id:
                get_cod = item['MatriculaProfessor']
                for prof in professor:
                    if prof['Matrícula'] == get_cod:
                        print('Nome do professor: ', prof['Nome'])

        except ValueError:
            print("Could not find item")

get_professor_name(get_id, Turma, Professor)