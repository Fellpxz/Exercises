curriculo = [{'id': 123654, 'CodigoCurso': 123, 'AnoImplantação': 2020,         'SemestreImplantação': 1},
             {'id': 123655, 'CodigoCurso': 213, 'AnoImplantação': 2021, 'SemestreImplantação': 1},
             {'id': 123656, 'CodigoCurso': 321, 'AnoImplantação': 2022, 'SemestreImplantação': 1}]

get_id = 123655

def get_implementation(id, curriculo):
    for item in curriculo:
        if item["id"] == id:
            tupla = ('O ano de implementação foi:', item["AnoImplantação"],'e o semestre:', item["SemestreImplantação"])
            print(tupla)

get_implementation(get_id, curriculo)