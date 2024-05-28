import pandas as pd
import psycopg2
from sqlalchemy import create_engine

usuario = 'postgres'
contraseña = 'tech'
host = 'localhost'  
puerto = '5432'  
base_de_datos = 'Proyecto1'
cadena_conexion = f'postgresql+psycopg2://{usuario}:{contraseña}@{host}:{puerto}/{base_de_datos}'
motor = create_engine(cadena_conexion)

ruta_carpeta_csv = 'C:\\Users\\Usuario\\Desktop\\Universidad\\Quinto Semestre\\Base De datos\\Proyecto1\\'

archivos_csv = [
    'appearances.csv',
    'games.csv',
    'leagues.csv',
    'players.csv',
    'shots.csv',
    'teams.csv',
    'teamstats.csv'
]

for archivo_csv in archivos_csv:
    ruta_completa = f'{ruta_carpeta_csv}{archivo_csv}'
    nombre_tabla = archivo_csv.split('.')[0]  

    datos = pd.read_csv(ruta_completa)

    datos.to_sql(nombre_tabla, motor, if_exists='append', index=False)

    print(f"Datos insertados con éxito en la tabla {nombre_tabla}.")
