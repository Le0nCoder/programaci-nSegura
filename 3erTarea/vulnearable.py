# vulnerable.py

def evaluar_entrada(usuario_input):
	#Bandit detectará esta como una vulneravilidad grave
	return eval(usuario_input)
